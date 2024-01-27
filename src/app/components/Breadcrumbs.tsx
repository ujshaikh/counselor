import Link from "next/link";

export default function Breadcrumbs({list, title}: {list: Object[], title: string}) {
    return (
        <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('images/bg_5.jpg')" }} data-stellar-background-ratio={0.5}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text align-items-end justify-content-center">
                    <div className="col-md-9 ftco-animate mb-5 text-center">
                        <p className="breadcrumbs mb-0">
                            {list && list.map((item:any, key:number) => 
                                !item.isCurrent
                                ? <span key={key} className="mr-2"><Link href={item.route}>{item.title} <i className="fa fa-chevron-right"></i></Link></span> 
                                : <span key={key}>{item.title} <i className="fa fa-chevron-right"></i></span>
                            )}
                        </p>
                        <h1 className="mb-0 bread">{title}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}