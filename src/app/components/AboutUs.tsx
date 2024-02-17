import Image from "next/image";
import ExpandText from "./ExpandText";

export default function AboutUs() {
    return (
        <section className="py-3 py-md-5 py-xl-8">
            <div className="container">
                <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center bg-light">
                    <div className="col-12 col-lg-6 col-xl-5">
                        <Image className="img-fluid rounded" loading="lazy" src="/images/about-2.jpeg" alt="" width={800} height={200} />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-7">
                        <div className="row justify-content-xl-center">
                            <div className="col-12 col-xl-11">
                                <h2 className="h1 mb-3">Who Are We?</h2>
                                <p className="lead fs-4 text-secondary mb-3">We all have stories for our lives. Most of the time, we tell them unconsciously to ourselves and to others.</p>
                                <ExpandText 
                                    text='The NLP Stories have now become a part of the folklore and it has become difficult to trace all the sources. Some of the stories are my own. I suspect that many came from David Gorden, an early Pioneer of NLP but one fascinated and made me stayed with NLP was of a Young Man Anthony Robbin whose otherworldly persuasive powers and brash brand of popular insight have grown into Robbins Research International, a life-coaching empire. Throughout his writings, seminars, and speeches, Robbins espouses viewpoints, techniques, and other practices he asserts help adherents improve their lives. He speaks about various "human needs, influences that affect people, the power of making decisions, and the need to achieve emotional mastery"'
                                    className="mb-5"
                                    maxLength={300}
                                />
                                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                                    <div className="col-12 col-md-6">
                                        <div className="d-flex">
                                            <div className="me-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                                                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="mb-3 pl-1">Unique Thinking</h4>
                                                <ExpandText 
                                                    text="I have transformed the way I think, believe and work. I believe that we can create a culture of abundance in the way we think, feel, manage our emotions and grow our work culture and consequently."
                                                    className="text-secondary mb-0"
                                                    maxLength={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="d-flex">
                                            <div className="me-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                                                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="mb-3">Unique Experience</h4>
                                                <ExpandText
                                                    text="NLP Provides a way of capitalizing on your unique experience and valuing it in a way that is special and provides a natural differentiation. My aim is to attract the people and the companies who can benefit in terms of making change in their personal and professional life from the kind of work I do and the way I do it."
                                                    className="text-secondary mb-0"
                                                    maxLength={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}