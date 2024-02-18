import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

function SlideModal() {
    const [show, setShow] = useState(false);
    const [iframeSize, setIframeSize] = useState({width: 0, height: 0})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setIframeSize({width: window.innerWidth*0.90, height: window.innerHeight-50})
    }, [])

    return (
        <>
            <button type="button" className="img-video d-flex align-items-center justify-content-center" onClick={handleShow}>
                <span className="fa fa-play"></span>
            </button>

            <Modal show={show} onHide={handleClose} dialogClassName="modal-90w" className="slider-modal">
                <Modal.Body>
                    <Button variant="secondary" onClick={handleClose} className="close"><span className="fas fa-times"></span></Button>
                    <center>
                        <iframe width={iframeSize.width} height={iframeSize.height} src={process.env.NEXT_PUBLIC_INTRO_YT_VIDEO_LINK} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </center>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default SlideModal