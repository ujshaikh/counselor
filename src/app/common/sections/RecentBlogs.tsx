import Link from "next/link";

export default function RecentBlogs() {
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
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry justify-content-end">
                            <div className="text text-center">
                                <Link href="/blogs/Social Media Risks To Mental Health 1" className="block-20 img"
                                    style={{ backgroundImage: "url('images/image_1.jpg')" }}>
                                </Link>
                                <div className="meta text-center mb-2 d-flex align-items-center justify-content-center">
                                    <div>
                                        <span className="day">18</span>
                                        <span className="mos">April</span>
                                        <span className="yr">2020</span>
                                    </div>
                                </div>
                                <h3 className="heading mb-3"><a href="#">Social Media Risks To Mental Health 1</a></h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry justify-content-end">
                            <div className="text text-center">
                                <Link href="/blogs/Social Media Risks To Mental Health 2" className="block-20 img"
                                    style={{ backgroundImage: "url('images/image_2.jpg')" }}>
                                </Link>
                                <div className="meta text-center mb-2 d-flex align-items-center justify-content-center">
                                    <div>
                                        <span className="day">18</span>
                                        <span className="mos">April</span>
                                        <span className="yr">2020</span>
                                    </div>
                                </div>
                                <h3 className="heading mb-3"><a href="#">Social Media Risks To Mental Health 2</a></h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry justify-content-end">
                            <div className="text text-center">
                                <Link href="/blogs/Social Media Risks To Mental Health 3" className="block-20 img"
                                    style={{ backgroundImage: "url('images/image_3.jpg')" }}>
                                </Link>
                                <div className="meta text-center mb-2 d-flex align-items-center justify-content-center">
                                    <div>
                                        <span className="day">18</span>
                                        <span className="mos">April</span>
                                        <span className="yr">2020</span>
                                    </div>
                                </div>
                                <h3 className="heading mb-3"><a href="#">Social Media Risks To Mental Health 3</a></h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}