'use client'
import ExpandText from "@/app/components/ExpandText";

export default function Testimonials() {
    return (
        <section className="ftco-section testimony-section">
            <div className="img img-bg border" style={{ backgroundImage: "url(images/bg_4.jpg)" }}></div>
            <div className="overlay"></div>
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                        <span className="subheading">Testimonial</span>
                        <h2 className="mb-3">Happy Clients</h2>
                    </div>
                </div>
                <div className="row ftco-animate">
                    <div className="col-md-12">
                        <div className="carousel-testimony owl-carousel ftco-owl">
                            <div className="item">
                                <div className="testimony-wrap py-4">
                                    <div className="icon d-flex align-items-center justify-content-center"><span
                                        className="fa fa-quote-left" /></div>
                                    <div className="text">
                                        <p className="font-weight-bold">Career Guidance Seminar</p>
                                        <ExpandText
                                            maxLength={150}
                                            className='my-css-class'
                                            text={'It was a great and amazing experience to be in his Career Guidance seminar. We as organizer got an awesome feedback of students and guardians about the seminar. People feel like an eye opener for alot of career opportunities which they never been informed about. Such session which relates the skill sets and intelligence of students with the Career options which they can choose are going to bring phenomenal difference. We are really happy with the inspirational and brilliant work of Mr. Aftab Siddique We really feel proud, happy and honored for associating Mr. Aftab Siddique with our organization SMWA. We are confident that under the Guidance of Aftab Sir our students are going to achieve their dream and will flourish their career.'}
                                        />
                                        <div className="d-flex align-items-center">
                                            <div className="user-img" style={{ backgroundImage: "url(images/user.jpg)" }}></div>
                                            <div className="pl-3">
                                                <p className="name">Mohammad Yusuf</p>
                                                <span className="position">Gen.Secretary</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}