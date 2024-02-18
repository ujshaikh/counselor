import { Key } from "react";
import { ServiceProps } from "../types";
import ExpandText from "./ExpandText";
import moment from "moment";

export default function StudentHubCard({services}: any) {
    return (
        <section className="ftco-section px-4" id="student-hub">
            <div className="container">
                <div className="row justify-content-center pb-5">
                    <div className="col-md-10 heading-section text-center ftco-animate">
                        <h2>Student Hub</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-0">
                <div className="row">
                {services && services['Student Hub'].map((service: ServiceProps, i: Key) => 
                    <div className="col-sm-4 col-md-6 col-lg-4 mt-4" key={i}>
                        <div className="card card-inverse card-info">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="card-img-top" src={`/images/courses/${service.img}`} alt="" />
                            <div className="card-block p-2">
                                <h5 className="card-title text-primary">{service.title}</h5>
                                <div className="card-text">
                                    <ExpandText
                                        text={service.desc}
                                        maxLength={250}
                                    />
                                </div>
                            </div>
                            <div className="card-footer">
                                <small>Last updated {moment().fromNow()}</small>
                                <button className="btn btn-info float-right btn-sm">Read More</button>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </section>
    )
}