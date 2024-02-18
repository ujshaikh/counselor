'use client';
import HowItWorks from "../common/sections/HowItWorks";
import Breadcrumbs from "../components/Breadcrumbs";
import ExpandText from "../components/ExpandText";
import services from "../../../public/data/services"
import Appointment from "../common/sections/Appointment";
import StudentHubCard from "../components/StudentHubCard";

export default function Services() {
    return (
        <>
            <Breadcrumbs list={[{ title: 'Home', route: '/', isCurrent: false }, { title: 'Services', route: '', isCurrent: true }]} title='Services' />
            <HowItWorks />

            <section className="ftco-section bg-light" id="counselling-services">
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div className="col-md-10 heading-section text-center ftco-animate">
                            <span className="subheading">Services</span>
                            <h2>We Can Help You By This Services & Programmes</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0">
                    <div className="row no-gutters">
                        {services && services['Our Programmes'].map((service, i) =>
                            <div className="col-md-6" key={i}>
                                <div className="services-wrap d-flex">
                                    <div className="img" style={{ backgroundImage: "url(images/"+service.img+")" }}></div>
                                    <div className="text">
                                        <h2>{service.title.toUpperCase()}</h2>
                                        <ExpandText
                                            text={service.desc}
                                            maxLength={200}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <StudentHubCard services={services} />

            <Appointment />
        </>
    )
}