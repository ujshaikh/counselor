import Image from "next/image"
import "../../../public/css/_navbar.css"
export default function _NavBar() {
    return (
        <nav className="navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <span id="header_shadow"></span>
            <div role="navigation">
                <div className="custom-nav">
                    <div className="brand-logo">
                        <a href="/"><Image src="/images/logo-2.png" width={250} height={50} alt="logo" /></a>
                    </div>
                    <div className="brand-phone">
                        <a href="tel:+919833749190"><i className="fas fa-phone me-3"></i> +91 983 374 9190</a>
                        <a href="mailto:aftablifecoach@gmail.com"><i className="fas fa-envelope me-3"></i> aftablifecoach@gmail.com</a>
                    </div>
                    <div className="text-center">
                        <nav className="top-bar-wrap">
                            <ul className="top-bar">
                                <li className="nav-item">
                                    <a href="#" className="nav-link"><span className="inner-link">Home</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link"><span className="inner-link">About</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link"><span className="inner-link">Contact</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link"><span className="inner-link">Support</span></a>
                                </li>
                            </ul>
                        </nav>
                        <nav className="main-nav-wrap">
                            <ul className="main-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link"><span className="inner-link">Services</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link"><span className="inner-link">Career</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link"><span className="inner-link">Features</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link"><span className="inner-link">Gallery</span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </nav>
    )
}