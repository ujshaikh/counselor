'use client'
import Link from "next/link";
import { useState } from "react";
import SlideModal from "../SlideModal";

export default function Slider() {
    const [showModal, setShowModalCls] = useState(false)

    const handleModalClick = () => {
        console.log('cliecked')
        setShowModalCls(!showModal)
    }

    return (
        <div className="hero-wrap" data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container slider">
                <div className="row no-gutters slider-text align-items-center">
                    <div className="col-md-6 ftco-animate d-flex align-items-end">
                        <div className="text w-100">
                            <h1 className="mb-4 mobile-text animate__animated animate__rubberBand animate__delay-2s">YOUR PERCEPTION IS YOUR REALITY</h1>
                            <blockquote className="blockquote text-left animate__animated animate__backInUp animate__delay-2s">
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
                                <Link href="/contact" className="button button-1 button-1e py-3 px-4">Contact us</Link>
                            </p>
                        </div>
                    </div>
                    {/* <button type="button" className="img-video d-flex align-items-center justify-content-center" onClick={handleModalClick}>
                        <span className="fa fa-play"></span>
                    </button> */}
                    {/* <Modal isOpen={showModal} title='Introduction' displayBottom={false} modalWrapper='slider-modal'>
                        <iframe width="420" height="345" src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1" frameBorder="0" allowFullScreen></iframe>
                    </Modal> */}
                    <SlideModal />
                    {/* <a href="https://vimeo.com/45830194"
                        className="img-video popup-vimeo d-flex align-items-center justify-content-center">
                        <span className="fa fa-play"></span>
                    </a> */}
                </div>
            </div>
        </div>
    )
}