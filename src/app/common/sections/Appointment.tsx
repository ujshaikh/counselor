'use client'

import { ContactProps } from "@/app/types"
import { SyntheticEvent, useEffect, useState } from "react"
import Modal from "../Modal"
import { isEmpty } from "lodash"

const initialErrors = {
    name: {
        field: '',
        invalid: false,
        message: ''
    },
    email: {
        field: '',
        invalid: false,
        message: ''
    }
}

const initialFormData = {
    name: '',
    email: '',
    service: '',
    message: ''
}

const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export default function Appointment() {
    const [formData, setFormData] = useState(initialFormData) as any
    const [btnText, setBtnText] = useState('Send message')
    const [showPopup, setShowPopup] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errors, setErrors] = useState(initialErrors)

    useEffect(() => {
        setHasError(true)
        return () => {
            setShowPopup(false)
        }
    }, [errors])

    const handleChange = (e: SyntheticEvent | any) => {
        e.preventDefault()
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        if (isEmpty(formData)) {
            setErrors({
                name: {
                    ...errors.name,
                    invalid: true,
                    message: 'Please enter your name'
                }, email: {
                    ...errors.email,
                    invalid: true,
                    message: 'Please enter your email'
                }
            })
        } else {
            if (formData.name.length < 3) {
                setErrors(
                    {
                        ...errors,
                        name: {
                            ...errors.name,
                            invalid: true,
                            message: 'Please enter your name'
                        }
                    }
                )
            }

            if (validateEmail(formData.email)) {
                setErrors(
                    {
                        ...errors,
                        email: {
                            ...errors.email,
                            invalid: true,
                            message: 'Please enter your email'
                        }
                    }
                )
            }
        }


        setBtnText('Sending...')
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => {
            console.log(res)
            if (res.ok === true) {
                setShowPopup(true)
                resetForm()
            } else {
                setHasError(true)
                setShowPopup(true)
                setBtnText('Send Message')
            }
        }).catch(err => {
            setHasError(true)
            setShowPopup(true)
            setBtnText('Send Message')
            console.error(err)
        })
    }

    const resetForm = () => {
        setBtnText('Send Message')
        setHasError(false)
        setErrors(initialErrors)
        setFormData(initialFormData)
    }

    return (
        <section className="ftco-appointment ftco-section img" style={{ backgroundImage: "url(images/bg_2.jpg)" }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 half ftco-animate">
                        <h2 className="mb-4">Send a Message &amp; Get in touch!</h2>
                        <form action="/api/contact" className={`appointment ${hasError && 'was-validated'}`} onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="name" className={`form-control ${errors.name.invalid && 'is-invalid'}`} placeholder="Your Name" onChange={handleChange} value={formData.name} aria-describedby="nameValidationFeedback" required />
                                        <div id="nameValidationFeedback" className="invalid-feedback">{errors.name.message}</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" name="email" className={`form-control ${errors.email.invalid && 'is-invalid'}`} placeholder="Email" onChange={handleChange} value={formData.email} aria-describedby="emailValidationFeedback" required />
                                        <div id="emailValidationFeedback" className="invalid-feedback">{errors.email.message}</div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                <select name="service" id="" className="form-control custom-select" onChange={handleChange} value={formData.service}>
                                                    <option value="Services">Services</option>
                                                    <option value="Relation Problem">Relation Problem</option>
                                                    <option value="Couple Counseling">Couple Counseling</option>
                                                    <option value="Depression Treatment">Depression Treatment</option>
                                                    <option value="Family Problem">Family Problem</option>
                                                    <option value="Personal Problem">Personal Problem</option>
                                                    <option value="Business Problem">Business Problem</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea name="message" id="" cols={30} rows={7} className="form-control"
                                            placeholder="Message" onChange={handleChange} value={formData.message}></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="submit" value={btnText} className="btn btn-primary py-3 px-4" />
                                    </div>
                                </div>
                                <Modal isOpen={showPopup} title='Send Your Message'>
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
                                                <p className="text-success">Message sent successfuly! We will connect you soon.</p>
                                                <p className="text-success">Thank You!</p>
                                            </div>
                                        </div>
                                    )}
                                </Modal>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}