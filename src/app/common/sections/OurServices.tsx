export default function OurServices() {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-8 text-center heading-section ftco-animate">
                        <span className="subheading">Our Services</span>
                        <h2 className="mb-3">We Can Help You With This Situation</h2>
                    </div>
                </div>
                <div className="row tabulation mt-4 ftco-animate">
                    <div className="col-md-4">
                        <ul className="nav nav-pills nav-fill d-md-flex d-block flex-column">
                            <li className="nav-item text-left">
                                <a className="nav-link active py-4" data-toggle="tab" href="#services-1">Relation Problem</a>
                            </li>
                            <li className="nav-item text-left">
                                <a className="nav-link py-4" data-toggle="tab" href="#services-2">Couples Counseling</a>
                            </li>
                            <li className="nav-item text-left">
                                <a className="nav-link py-4" data-toggle="tab" href="#services-3">Depression Treatment</a>
                            </li>
                            <li className="nav-item text-left">
                                <a className="nav-link py-4" data-toggle="tab" href="#services-4">Family Problem</a>
                            </li>
                            <li className="nav-item text-left">
                                <a className="nav-link py-4" data-toggle="tab" href="#services-5">Personal Problem</a>
                            </li>
                            <li className="nav-item text-left">
                                <a className="nav-link py-4" data-toggle="tab" href="#services-6">Business Problem</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content">
                            <div className="tab-pane container p-0 active" id="services-1">
                                <div className="img" style={{ backgroundImage: "url(/images/services-1.jpg)" }}></div>
                                <h3><a href="#">Relation Problem</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean.</p>
                            </div>
                            <div className="tab-pane container p-0 fade" id="services-2">
                                <div className="img" style={{ backgroundImage: "url(images/services-2.jpg)" }}></div>
                                <h3><a href="#">Couples Counseling</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean.</p>
                            </div>
                            <div className="tab-pane container p-0 fade" id="services-3">
                                <div className="img" style={{ backgroundImage: "url(images/services-3.jpg)" }}></div>
                                <h3><a href="#">Depression Treatment</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean.</p>
                            </div>
                            <div className="tab-pane container p-0 fade" id="services-4">
                                <div className="img" style={{ backgroundImage: "url(images/services-4.jpg)" }}></div>
                                <h3><a href="#">Family Problem</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean.</p>
                            </div>
                            <div className="tab-pane container p-0 fade" id="services-5">
                                <div className="img" style={{ backgroundImage: "url(images/services-5.jpg)" }}></div>
                                <h3><a href="#">Personal Problem</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean.</p>
                            </div>
                            <div className="tab-pane container p-0 fade" id="services-6">
                                <div className="img" style={{ backgroundImage: "url(images/services-6.jpg)" }}></div>
                                <h3><a href="#">Business Problem</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}