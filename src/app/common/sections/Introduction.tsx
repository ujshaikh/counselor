import Link from "next/link";

export default function Introduction() {
    return (
        <section className="ftco-intro">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-4 d-flex">
                        <div className="intro aside-stretch d-lg-flex w-100">
                            <div className="icon">
                                <span className="flaticon-checklist"></span>
                            </div>
                            <div className="text" style={{maxWidth:300}}>
                                <h2 className="text-wrap">CORPORATE EXCELLENCE</h2>
                                <p>NLP focuses on sensory experience-what you see, hear and feel. When a sensory... <Link href='#' className="text-decoration">Read More</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="intro color-1 d-lg-flex w-100">
                            <div className="icon">
                                <span className="flaticon-employee"></span>
                            </div>
                            <div className="text">
                                <h2>GOLDEN PARENTING</h2>
                                <p>Adopting an effective method for training children is extremely important and... <Link href='#' className="text-decoration">Read More</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="intro color-2 d-lg-flex w-100">
                            <div className="icon">
                                <span className="flaticon-umbrella"></span>
                            </div>
                            <div className="text">
                                <h2>STRESS MANAGEMENT</h2>
                                <p>Stress is a constant in all our lives. The pressure to meet our work deadlines... <Link href='#' className="text-decoration">Read More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}