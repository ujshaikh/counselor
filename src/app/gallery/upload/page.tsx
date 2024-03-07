'use client'
import FileUpload from "@/app/components/FIleUpload";
import { SyntheticEvent, useState } from "react";

export default function Page() {
    const [files, setFiles] = useState<Array<File>>([])
    
    const onChange = (files: Array<File>) => {
        setFiles(files)
    }

    const onSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const data = new FormData()
            for (const file of files) {
                data.append("images", file);
            }
    
            const res = await fetch('/api/gallery/upload', {
                method: 'POST',
                body: data
            })
            // handle the error
            if (!res.ok) throw new Error(await res.text())
        } catch (e: any) {
            // Handle errors here
            console.error(e)
        }
    }

    return (
        <div className="container mt-4 mb-4">
            <form encType="multipart/form-data" onSubmit={onSubmit}>
                <FileUpload onChange={onChange}/>
            </form>
        </div>
    )
}