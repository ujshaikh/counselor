import HowItWorks from "../common/sections/HowItWorks";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Services() {
    return (
        <>
            <Breadcrumbs list={[{ title: 'Home', route: '/', isCurrent: false }, { title: 'Services', route: '', isCurrent: true }]} title='Services' />
            <HowItWorks />

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div className="col-md-10 heading-section text-center ftco-animate">
                            <span className="subheading">Services</span>
                            <h2>We Can Help You With This Situation</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <div className="services-wrap d-flex">
                                <div className="img" style={{ backgroundImage: "url(images/services-1.jpg)" }}></div>
                                <div className="text">
                                    <h2>Relation Problem</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="services-wrap d-flex">
                                <div className="img" style={{ backgroundImage: "url(images/services-2.jpg)" }}></div>
                                <div className="text">
                                    <h2>Couples Counseling</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="services-wrap d-flex">
                                <div className="img order-md-last" style={{ backgroundImage: "url(images/services-3.jpg)" }}></div>
                                <div className="text">
                                    <h2>Depression Treatment</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="services-wrap d-flex">
                                <div className="img order-md-last" style={{ backgroundImage: "url(images/services-4.jpg)" }}></div>
                                <div className="text">
                                    <h2>Family Problem</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="services-wrap d-flex">
                                <div className="img" style={{ backgroundImage: "url(images/services-5.jpg)" }}></div>
                                <div className="text">
                                    <h2>Personal Problem</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="services-wrap d-flex">
                                <div className="img" style={{ backgroundImage: "url(images/services-6.jpg)" }}></div>
                                <div className="text">
                                    <h2>Business Problem</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}