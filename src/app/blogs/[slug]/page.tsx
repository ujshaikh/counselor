'use client';
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Image from "next/image";
import { Key, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import services from "../../../../public/data/services";
import Link from "next/link";
import moment from "moment";
import { useRouter } from "next/navigation";
import httpClient from "@/app/utils/httpClient";

export default function SingleBlog({ params }: { params: { slug: string } }) {
    const [id, setBlogId] = useState('')
    const [options, setBlogOptions] = useState()
    const [blog, setBlogData] = useState({})
    const [recentBlogs, setRecentBlogsData] = useState<any>([])
    const [blogSelections, setBlogSelections] = useState<any>([]);
    const router = useRouter();

    const { blogServices: { getAll, getRecent } } = httpClient
    const query = new URLSearchParams({
        isRecent: 'true',
        limit: '5'
    })

    const handleBlogSelection = (value: []) => {
        console.log('e.currentTarget.value', value)
        setBlogSelections(value)
        if (Array.isArray(value) && value.length !== 0) {
            const _id = value[0].id
            setBlogId(_id)
            router.push('/blogs/' + _id)
            router.refresh()
        }
    }

    useEffect(() => {
        setBlogId(decodeURI(params.slug))

        async function fetchBlogById(id: string) {
            const _blogs = await getAll()
            const _recentBlogs = await getRecent(query)

            const _blog = (_blogs.data || []).filter((v: any) => v.id == id)
            const titles = (_blogs.data || []).map((v: any) => ({ label: v.title, id: v.id }))

            setRecentBlogsData(_recentBlogs.data)
            setBlogOptions(titles)
            if (Array.isArray(_blog)) {
                setBlogData(_blog[0])
            }
        }

        if (id) {
            fetchBlogById(id)
        }

    }, [id])

    return (
        <>
            {blog && <Breadcrumbs list={[{ title: 'Home', route: '/', isCurrent: false }, { title: 'Blogs', route: '/', isCurrent: false }, { title: blog.title, route: '/', isCurrent: true }]} title={blog.title} />}

            {blog && (
                <section className="ftco-section ftco-degree-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 ftco-animate">
                                <p>
                                    <Image src={`/images/${blog.blogImg}`} alt="" className="img-fluid" width={1000} height={1000} />
                                </p>
                                <h2 className="mb-3">{blog.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                                <div className="tag-widget post-tag-container mb-5 mt-5">
                                    <div className="tagcloud">
                                        <a href="#" className="tag-cloud-link">Life</a>
                                        <a href="#" className="tag-cloud-link">Sport</a>
                                        <a href="#" className="tag-cloud-link">Tech</a>
                                        <a href="#" className="tag-cloud-link">Travel</a>
                                    </div>
                                </div>

                                <div className="about-author d-flex p-4 bg-light">
                                    <div className="bio mr-5">
                                        <Image src="/images/author.jpg" alt="Image placeholder" className="circle img-fluid mb-4" width={250} height={250} />

                                    </div>
                                    <div className="desc">
                                        <h3>Aftab Siddiqui</h3>
                                        <p>I am not a mentor or guru, I am just hardworking, conscientious and caring counselor with extensive knowledge of offering advice, support, and guidance to clients to cope issues that maybe hampering their overall mental health.</p>
                                    </div>
                                </div>


                                <div className="pt-5 mt-5">
                                    <h3 className="mb-5">6 Comments</h3>
                                    <p className="text-danger">Note: This is a sample comment section. TBC</p>
                                    <ul className="comment-list">
                                        <li className="comment">
                                            <div className="vcard bio">
                                                <Image src="/images/person_1.jpg" alt="Image placeholder" width={50} height={50} />
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta">April 12, 2020 at 1:21am</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>
                                        </li>

                                        <li className="comment">
                                            <div className="vcard bio">
                                                <Image src="/images/person_1.jpg" alt="Image placeholder" width={50} height={50} />
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta">April 12, 2020 at 1:21am</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>

                                            <ul className="children">
                                                <li className="comment">
                                                    <div className="vcard bio">
                                                        <Image src="/images/person_1.jpg" alt="Image placeholder" width={50} height={50} />
                                                    </div>
                                                    <div className="comment-body">
                                                        <h3>John Doe</h3>
                                                        <div className="meta">April 12, 2020 at 1:21am</div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                        <p><a href="#" className="reply">Reply</a></p>
                                                    </div>


                                                    <ul className="children">
                                                        <li className="comment">
                                                            <div className="vcard bio">
                                                                <Image src="/images/person_1.jpg" alt="Image placeholder" width={50} height={50} />
                                                            </div>
                                                            <div className="comment-body">
                                                                <h3>John Doe</h3>
                                                                <div className="meta">April 12, 2020 at 1:21am</div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                                <p><a href="#" className="reply">Reply</a></p>
                                                            </div>

                                                            <ul className="children">
                                                                <li className="comment">
                                                                    <div className="vcard bio">
                                                                        <Image src="/images/person_1.jpg" alt="Image placeholder" width={50} height={50} />
                                                                    </div>
                                                                    <div className="comment-body">
                                                                        <h3>John Doe</h3>
                                                                        <div className="meta">April 12, 2020 at 1:21am</div>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                                        <p><a href="#" className="reply">Reply</a></p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="comment">
                                            <div className="vcard bio">
                                                <Image src="/images/person_1.jpg" alt="Image placeholder" width={50} height={50} />
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta">April 12, 2020 at 1:21am</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="comment-form-wrap pt-5">
                                        <h3 className="mb-5">Leave a comment</h3>
                                        <form action="#" className="p-5 bg-light">
                                            <div className="form-group">
                                                <label htmlFor="name">Name *</label>
                                                <input type="text" className="form-control" id="name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email *</label>
                                                <input type="email" className="form-control" id="email" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="website">Website</label>
                                                <input type="url" className="form-control" id="website" />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="message">Message</label>
                                                <textarea name="" id="message" cols={30} rows={10} className="form-control"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
                                            </div>

                                        </form>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 sidebar pl-lg-5 ftco-animate">
                                <div className="sidebar-box">
                                    <form action="#" className="search-form">
                                        <Form.Group>
                                            <Form.Label>Search blog</Form.Label>
                                            <Typeahead
                                                id="basic-typeahead-single"
                                                labelKey="label"
                                                onChange={handleBlogSelection}
                                                options={options}
                                                placeholder="Type keyword of blog and select from list"
                                                selected={blogSelections}
                                                size="sm"
                                                clearButton
                                            />
                                        </Form.Group>
                                    </form>
                                </div>
                                <div className="sidebar-box ftco-animate">
                                    <div className="categories">
                                        <h3>Services</h3>
                                        {Object.keys(services).map((item: string, i: Key) =>
                                            <li key={i}><Link href={`/services#${item.toLowerCase().replace(' ', '-')}`}>{item} <span className="fas fa-chevron-right"></span></Link></li>
                                        )}
                                    </div>
                                </div>

                                <div className="sidebar-box ftco-animate">
                                    <h3>Recent Blog</h3>
                                    {recentBlogs.map((blog: any, i: Key) =>
                                        <div className="block-21 mb-4 d-flex" key={i}>
                                            <a className="blog-img mr-4" style={{ backgroundImage: "url('/images/blogs/" + blog.blogImg + "')" }}></a>
                                            <div className="text">
                                                <h3 className="heading"><a href="#">{blog.title}</a></h3>
                                                <div dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 50) + '...' }}></div>
                                                <div className="meta">
                                                    <div><a href="#"><span className="fa fa-calendar"></span> {moment(blog.date).format('ll')}</a></div>
                                                    <div><a href="#"><span className="fa fa-user"></span> Admin</a></div>
                                                    <div><a href="#"><span className="fa fa-comment"></span> 19</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img mr-4" style={{ backgroundImage: "url(images/image_2.jpg)" }}></a>
                                        <div className="text">
                                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                            <div className="meta">
                                                <div><a href="#"><span className="fa fa-calendar"></span> Apr. 18, 2020</a></div>
                                                <div><a href="#"><span className="fa fa-user"></span> Admin</a></div>
                                                <div><a href="#"><span className="fa fa-comment"></span> 19</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-21 mb-4 d-flex">
                                        <a className="blog-img mr-4" style={{ backgroundImage: "url(images/image_3.jpg)" }}></a>
                                        <div className="text">
                                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                            <div className="meta">
                                                <div><a href="#"><span className="fa fa-calendar"></span> Apr. 18, 2020</a></div>
                                                <div><a href="#"><span className="fa fa-user"></span> Admin</a></div>
                                                <div><a href="#"><span className="fa fa-comment"></span> 19</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-box ftco-animate">
                                    <h3>Tag Cloud</h3>
                                    <div className="tagcloud">
                                        <a href="#" className="tag-cloud-link">counsel</a>
                                        <a href="#" className="tag-cloud-link">problem</a>
                                        <a href="#" className="tag-cloud-link">family</a>
                                        <a href="#" className="tag-cloud-link">personal</a>
                                        <a href="#" className="tag-cloud-link">business</a>
                                        <a href="#" className="tag-cloud-link">computer</a>
                                        <a href="#" className="tag-cloud-link">house</a>
                                        <a href="#" className="tag-cloud-link">technology</a>
                                    </div>
                                </div>

                                <div className="sidebar-box ftco-animate">
                                    <h3>Conclusion</h3>
                                    <p className="text-danger">Note: This is a sample conclusion section. TBC</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            )}
        </>
    )
}