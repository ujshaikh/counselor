'use client'
import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import Editor from "ckeditor5-custom-build";
import Editor from '@ckeditor/ckeditor5-build-classic'
import Modal from '../common/Modal';

const editorConfiguration = {
    removePlugins: ['Title'],
    toolbar: ['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', 'imageUpload', 'insertTable',
    'tableColumn', 'tableRow', 'mergeTableCells', 'mediaEmbed', '|', 'undo', 'redo']
};

const initialData = {
    title: '',
    blogImg: '',
    content: ''
}

export default function CustomEditor(props: any) {
    const [formData, setFormData] = useState(initialData)
    const [content, setContent] = useState('')
    const [isOpen, setIsOpenModal] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [blogImages, setBlogImages] = useState([])

    const titleRef = useRef<any>(null)

    const handleChange = (e: SyntheticEvent | any) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const resetForm = () => {
        titleRef?.current?.focus()
        setHasError(false)
        setContent('')
        setFormData(initialData)
        setLoading(false)
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        setLoading(true)

        const { data } = props

        const _formData = { ...formData, content }
        if (_formData.title.length === 0 || _formData.content.length < 10) {
            return false
        }

        const apiEndPoint = data.isNew ? '/api/blog' : '/api/blog/' + data.id

        fetch(apiEndPoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(_formData)
        }).then(res => {
            if (res.ok) resetForm()
            setHasError(!res.ok)
            setIsOpenModal(true)
        }).catch(err => {
            console.error(err)
            setHasError(true)
            setIsOpenModal(true)
        }).finally(() => {
            setLoading(false)
        })
    }

    async function getBlog () {
        const res = await fetch('/api/blog/?onlyImgs=true')
        return res.json()
    }

    useEffect(() => {
        setContent(props.data.content)
        setFormData({
            ...formData,
            title: props.data.title
        })

        getBlog().then(blog => setBlogImages(blog.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props])

    return (
        <div className='container mb-4'>
            <form action='#' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="blogTitle">Blog Title</label>
                    <input name="title" type="text" className="form-control" id="blogTitle" placeholder="Enter blog title" onChange={handleChange} value={formData.title} ref={titleRef} />
                </div>
                <div className="form-group">
                    <label htmlFor="blogTitle">Select Blog Image</label>
                    <select name="blogImg" id="blogImg" className="form-control" onChange={handleChange} value={formData.blogImg}>
                        <option value="">Select Uploaded Image for this blog</option>
                        {blogImages?.map((img, i) => 
                            <option value={img} key={i}>{img}</option>
                        )}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="blogContent">Blog Content</label>
                    <CKEditor
                        id="blogContent"
                        editor={Editor}
                        config={editorConfiguration}
                        data={content || ''}
                        onChange={(event, editor: any) => {
                            const data = editor.getData();
                            setContent(data)
                        }}
                    />
                </div>

                {!isLoading ?
                    (<button type='submit' className='btn btn-primary'>Submit</button>) :
                    (<button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span className="sr-only">Loading...</span>
                    </button>)
                }
                <Modal isOpen={isOpen} title='Blog'>
                    {hasError ? (
                        <div className="row">
                            <div className="col-2 text-center">
                                <i className="fas fa-times-circle text-danger pt-4" style={{ fontSize: 60 }}></i>
                            </div>
                            <div className="col-10">
                                <p className="text-danger">Form submission failed, please try again</p>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-2 text-center">
                                <i className="fas fa-check-circle text-success pt-4" style={{ fontSize: 60 }}></i>
                            </div>
                            <div className="col-10">
                                <p className="text-success">Form submitted successfuly!</p>
                                <p className="text-success">Thank You!</p>
                            </div>
                        </div>
                    )}
                </Modal>
            </form>
        </div>
    )
}