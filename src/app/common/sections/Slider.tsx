export default function Slider() {
    return (
        <div className="hero-wrap" style={{ backgroundImage: "url('images/bg_1.jpg')" }} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center">
                    <div className="col-md-6 ftco-animate d-flex align-items-end">
                        <div className="text w-100">
                            <h1 className="mb-4">Counseling For Your Better Life</h1>
                            <p className="mb-4">A small river named Duden flows by their place and supplies it with the
                                necessary regelialia.</p>
                            <p><a href="#" className="btn btn-primary py-3 px-4">Contact us</a> <a href="#"
                                className="btn btn-white py-3 px-4">Read more</a></p>
                        </div>
                    </div>
                    <a href="https://vimeo.com/45830194"
                        className="img-video popup-vimeo d-flex align-items-center justify-content-center">
                        <span className="fa fa-play"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}