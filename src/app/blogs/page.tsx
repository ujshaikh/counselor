'use client';
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import { Key, SetStateAction, useEffect, useMemo, useState } from "react";
import { BlogProps } from "../types";
import Pagination from "../components/Pagination";
import httpClient from "../utils/httpClient";

let PageSize = 6;

// const reducer = (state: any, action: { type: any; payload: any[]; id?: any; }) => {
//     console.log('state', state)
//     switch (action.type) {
//         case "GET_ALL_BLOGS":
//             return { ...state, blogs: action.payload }
//         case "GET_BLOG_BY_ID":
//             const blog = action.payload.filter((v: { id: any; }) => v.id == action.id)
//             return { ...state, blogs: [blog] }
//         default:
//             return state
//     }
// }

export default function Blogs() {
    const [blogs, setBlogsData] = useState([])
    // const [state, dispatch] = useReducer(reducer, {});
    const [currentPage, setCurrentPage] = useState(1);
    const { blogServices } = httpClient
    const currentBlogs = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return blogs && blogs.slice(firstPageIndex, lastPageIndex);
    }, [blogs, currentPage]);

    useEffect(() => {
        async function fetchAllBlogs() {
            const _blogs = await blogServices.getAll()
            setBlogsData(_blogs.data)
        }

        if (currentBlogs.length === 0) {
            fetchAllBlogs()
        }

    }, [currentBlogs])

    return (
        <>
            <Breadcrumbs list={[{ title: 'Home', route: '/', isCurrent: false }, { title: 'Blogs', route: '', isCurrent: true }]} title='Blogs' />

            <section className="ftco-section">
                <div className="container">
                    <div className="row d-flex">
                        {Array.isArray(currentBlogs) && currentBlogs.map((blog: BlogProps, key: Key) =>
                            <div key={key} className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry justify-content-end">
                                    <div className="text text-center">
                                        <Link href={`/blogs/${blog.id}`} className="block-20 img" style={{ backgroundImage: "url('images/blogs/" + blog.blogImg + "')" }} />
                                        <div className="meta text-center mb-2 d-flex align-items-center justify-content-center">
                                            <div>
                                                {blog.date.split('-').map((d, i) =>
                                                    <>
                                                        {i === 0 && <span key={`day-${i}`} className="day">{d}</span>}
                                                        {i === 1 && <span key={`mos-${i}`} className="mos">{d}</span>}
                                                        {i === 2 && <span key={`yr-${i}`} className="yr">{d}</span>}
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        <h3 className="heading mb-3"><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></h3>
                                        <div dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 300) + '...' }}></div>
                                        <Link href='#' className="text-decoration text-primary">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center">
                            <div className="block-27">
                                <Pagination
                                    className="pagination-bar"
                                    currentPage={currentPage}
                                    totalCount={blogs?.length}
                                    pageSize={PageSize}
                                    onPageChange={(page: SetStateAction<number>) => setCurrentPage(page)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}