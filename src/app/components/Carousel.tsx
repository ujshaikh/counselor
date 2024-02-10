import Image from "next/image"
import { Key } from "react"

type imgAttr = { title: string, desc: string, src: string, alt: string }
type CarouselProps = { data: imgAttr[] }

const Carousel = ({ data }: CarouselProps) => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                {data.map((item: any, i: Key) => (
                <div className={`carousel-item ${i===0 && 'active'}`} key={i}>
                    <Image src={item.src} className="d-block w-100" alt={item.alt} width={800} height={350} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                    </div>
                </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    )
}

export default Carousel