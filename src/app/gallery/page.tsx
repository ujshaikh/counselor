'use client'
import { useEffect, useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import CustomGallery from "../components/CustomGallery";
import galleryServices from "../utils/gallery";

export default function Page () {
    const [photos, setPhotos] = useState([])
    
    useEffect(() => {
        async function fetchAllBlogs() {
            const _blogs = await galleryServices.getAll()
            setPhotos(_blogs.data)
        }

        fetchAllBlogs()
    }, [])

    return (
        <>
            <Breadcrumbs list={[{ title: 'Home', route: '/', isCurrent: false }, { title: 'Gallery', route: '', isCurrent: true }]} title='Gallery' />

            <CustomGallery photos={photos} />
        </>
    )
}