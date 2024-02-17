'use client'
import Link from "next/link";
import Modal from "../Modal";
import { useState } from "react";

export default function Slider() {
    const [showModal, setShowModalCls] = useState(false)

    const handleModalClick = () => {
        console.log('cliecked')
        setShowModalCls(!showModal)
    }

    return (
        <div className="hero-wrap" style={{ backgroundImage: "url('images/bg_1.jpg')" }} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container slider">
                <div className="row no-gutters slider-text align-items-center">
                    <div className="col-md-6 ftco-animate d-flex align-items-end">
                        <div className="text w-100">
                            <h1 className="mb-4 mobile-text">YOUR PERCEPTION IS YOUR REALITY</h1>
                            <blockquote className="blockquote text-left">
                                <p className="mb-0">When sorrow seizes you, if you are wise,
                                you will question that sorrow-fraught moment,
                                saying to it, “O sorrow, who now deniest
                                Thy Portion of bounty given thee by the Perfect One,
                                Even if each moment be not to thee a glad spring,
                                Yet of what is thy body, like a rose-heap, a storehouse?
                                Thy body is heap of roses, thy thought rosewater;
                                Twere strange if rosewater ignored the rose-heap!</p>
                                <footer className="blockquote-footer"><cite title="Source Title">Rumi</cite></footer>
                            </blockquote>
                            <p>
                                <Link href="/contact" className="btn btn-primary py-3 px-4">Contact us</Link>
                                <Link href="/about" className="btn btn-white py-3 px-4">Read more</Link>
                            </p>
                        </div>
                    </div>
                    <button type="button" className="img-video d-flex align-items-center justify-content-center" onClick={handleModalClick}>
                        <span className="fa fa-play"></span>
                    </button>
                    <Modal isOpen={showModal} title='Introduction'>
                        <></>
                    </Modal>
                    {/* <a href="https://vimeo.com/45830194"
                        className="img-video popup-vimeo d-flex align-items-center justify-content-center">
                        <span className="fa fa-play"></span>
                    </a> */}
                </div>
            </div>
        </div>
    )
}