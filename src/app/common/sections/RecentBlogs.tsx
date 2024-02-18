'use client'
import httpClient from "@/app/utils/httpClient";
import Link from "next/link";
import { Key, useEffect, useState } from "react";

export default function RecentBlogs() {
    const [blogs, setBlogsData] = useState([])

    const { blogServices: { getRecent } } = httpClient
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const query = new URLSearchParams({
        isRecent: 'true',
        limit: '3'
    })

    useEffect(() => {
        async function fetchRecentBlogs() {
            const _blogs = await getRecent(query)
            console.log('_blogs', _blogs.data)
            setBlogsData(_blogs.data)
        }

        fetchRecentBlogs()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 heading-section text-center ftco-animate">
                        <span className="subheading">Blog</span>
                        <h2>Recent Blog</h2>
                    </div>
                </div>
                <div className="row d-flex">
                    {blogs && blogs.map((blog: any, i: Key) =>
                    (<div className="col-md-4 d-flex ftco-animate" key={i}>
                        <div className="blog-entry justify-content-end">
                            <div className="text text-center">
                                <Link href="/blogs/Social Media Risks To Mental Health 1" className="block-20 img"
                                    style={{ backgroundImage: "url('images/blogs/" + blog.blogImg + "')" }}>
                                </Link>
                                <div className="meta text-center mb-2 d-flex align-items-center justify-content-center">
                                    <div>
                                        <span className="day">{new Date(blog.date).getUTCDate()}</span>
                                        <span className="mos">{new Date(blog.date).toLocaleString('en-us', { month: 'short' })}</span>
                                        <span className="yr">{new Date(blog.date).getFullYear()}</span>
                                    </div>
                                </div>
                                <h3 className="heading mb-3"><a href="#">{blog.title}</a></h3>
                                <div dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 200) + '...' }}></div>
                                <Link href='#' className="text-decoration text-primary">Read More</Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}