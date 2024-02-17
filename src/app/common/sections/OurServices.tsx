'use client'
import Image from "next/image"
import Link from "next/link"
import { Key, SyntheticEvent, useState } from "react"
import services from "../../../../public/data/services.js"

const getKeyByString = (str: string) => str.match(/[a-z]|[0-9]|-/gi)?.join('').toLowerCase()

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
                <ServiceCategories services={services} />
            </div>
        </section>
    )
}

const ServiceNavItem = ({ items }: any) => {
    return (
        items.map((item: any, i: number) => (
            <li className="nav-item text-left" key={i}>
                <a className={`nav-link py-4 ${i === 0 && 'active'}`} data-toggle="tab" href={`#${getKeyByString(item.title)}`}>{item.title}</a>
            </li>
        ))
    )
}

const ServiceTabPane = ({ items }: any) => {
    return (
        items.map((item: any, i: number) =>
            <div className={`tab-pane container p-0 ${i === 0 ? 'active' : 'fade'}`} id={getKeyByString(item.title)} key={i}>
                <div className="img" style={{ backgroundImage: `url(images/${item.img})` }}></div>
                <h3><a href="#">{item.title}</a></h3>
                <p>{item.desc}</p>
                {item.points && (
                    <ul className="service-points">
                        {item.points.split('/').map((point: string, i: Key) =>
                            <li key={i}><i className="fas fa-check-square"></i><span className="ml-2">{point}</span></li>
                        )}
                    </ul>
                )}
            </div>
        )
    )
}

const AllServicePane = ({ items }: any) => {
    return (
        items.map((item: any, i: number) =>
            <div className={`px-md-3 ftco-animate py-3 p-2`} key={i}>
                <h3><a href="#">{item.title}</a></h3>
                <Image className="img-fill-avl" src={`/images${item.img}`} alt="service" width={600} height={500}/>
                <p>{item.desc}</p>
                {item.points && (
                    <ul className="service-points">
                        {item.points.split('/').map((point: string, i: Key) =>
                            <li key={i}><i className="fas fa-check-square"></i><span className="ml-2">{point}</span></li>
                        )}
                    </ul>
                )}
            </div>
        )
    )
}

const ServiceCategories = ({ services }: any) => {
    const data = Object.keys(services)

    const [activeAccordionIndex, setActiveIndex] = useState<any>(0)

    const handleClick = (e: SyntheticEvent<HTMLAnchorElement>) => {
        // e.preventDefault()
        const index = e.currentTarget.dataset.index
        setActiveIndex(index)
    }

    return (
        data.map((service, i) => (
            <div className="servicesAccordion fade-in" id={`service-accordion-${i}`} key={i}>
                <div className="card">
                    <div className="card-header" id={`heading-${i}`}>
                        <h2 className="mb-0">
                            <Link href={`#service-accordion-${i}`} className="btn btn-link btn-block text-left" aria-expanded={activeAccordionIndex == i ? 'true' : 'false'} data-index={i} data-title={service} onClick={handleClick}>
                                {service}
                            </Link>
                        </h2>
                    </div>
                    
                    <div className={`mobile-only collapse ${activeAccordionIndex == i ? 'show' : 'fade'}`} id={`accordion-body-${i}`}>
                        <AllServicePane items={services[service]} />
                    </div>

                    <div className={`mobile-hidden collapse ${activeAccordionIndex == i ? 'show' : 'fade'}`}>
                        <div className="card-body">
                            <div className="row tabulation mt-4 ftco-animate">
                                <div className="col-md-4">
                                    <ul className="nav nav-pills nav-fill d-md-flex d-block flex-column">
                                        <ServiceNavItem items={services[service]} />
                                    </ul>
                                </div>
                                <div className="col-md-8">
                                    <div className="tab-content">
                                        <ServiceTabPane items={services[service]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}