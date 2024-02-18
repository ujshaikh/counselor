import services from "../../../../public/data/services";
import ExpandText from "@/app/components/ExpandText";
import Image from "next/image";

const padNumber: any = (number: number, length: number) => {
    if (number.toString().length >= length) {
        return number;
    } else {
        return '0' + padNumber(number, length - 1);
    }
}

export default function HowItWorks() {
    return (
        <section className="ftco-section" id="our-programmes">
            <div className="container">
                <div className="row justify-content-center pb-5">
                    <div className="col-md-7 heading-section text-center ftco-animate">
                        <span className="subheading">Services</span>
                        <h2>How It Works</h2>
                    </div>
                </div>
                <div className="row">
                    {services && services['Counselling Services'].map((service: any, i: any) =>
                        <div className="col-md-4 d-flex align-items-stretch ftco-animate" key={i}>
                            <div className="services-2 text-center">
                                <div className="icon-wrap">
                                    <div className="number d-flex align-items-center justify-content-center"><span>{padNumber(parseInt(i) + 1, 2)}</span></div>
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <Image src={`/images${service.img}`} alt="" width={200} height={180} className="how-it-work"/>
                                    </div>
                                </div>
                                <h2 className="text-capitalize">{service.title.toUpperCase()}</h2>
                                <ExpandText
                                    text={service.desc}
                                    maxLength={200}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}