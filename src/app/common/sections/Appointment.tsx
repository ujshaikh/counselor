export default function Appointment() {
    return (
        <section className="ftco-appointment ftco-section img" style={{ backgroundImage: "url(images/bg_2.jpg)" }}>		<div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 half ftco-animate">
                        <h2 className="mb-4">Send a Message &amp; Get in touch!</h2>
                        <form action="#" className="appointment">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                    <option value="">Services</option>
                                                    <option value="">Relation Problem</option>
                                                    <option value="">Couple Counseling</option>
                                                    <option value="">Depression Treatment</option>
                                                    <option value="">Family Problem</option>
                                                    <option value="">Personal Problem</option>
                                                    <option value="">Business Problem</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea name="" id="" cols={30} rows={7} className="form-control"
                                            placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="submit" value="Send message" className="btn btn-primary py-3 px-4" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}