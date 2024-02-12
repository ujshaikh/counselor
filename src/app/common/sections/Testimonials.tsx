'use client'
import ExpandText from "@/app/components/ExpandText";
import { Key } from "react";

type testimonialProps = {title: string, content: string, name: string, position: string}

const testimonials: testimonialProps[] = [
    {
        title: 'Panic Attack in client\'s words',
        content: 'Mujhe Aksar Neck Ke Peeche Dard Hota tha aur chest me pain hota tha aur bahot ghabrahat Hoti thi Jisse Mujhe Neend Nahi Aati Thi Aur bahot Chid chida Pan Rahta Tha Toh Maine Ek Doctor Ko Bataya Aur Unhone Mujhe Medicine Diya Jo Maine 3 Mahine Khaya Par Mujhe koi Faayda Nahi Hua Phir Maine Homoepath Ki Dawa Shuru Aur 39 Months Tak Khaya Phir Dawa Band Kar diya Aur Phirse Ghabraht Bechaini Chest Me Pain Hona Shuru ho gaya Toh Maine GP ko dikhaya Aur Blood Urine etc sab Report Test karayee par Sab Report Normal Aayi Phir Mujhe Doctor Ne Aftab Sir ko Refer Kiya Aur Unke Saath Pehle Session karne Pe Mujhe Bahot Accha feel hona Shuru hua Aur Meri Tabiyat Me 70% Aaram ho Gaya Abhi Tak Aftab Sir ke saath khuch session karne ke baad Mujhe ab 90% aaram hai Jo Kabhi Medicine Se Nahi Hota tha.Har Session Ke baad Aftab Sir ke diye hue Mind exercercise se mujhe bahot better feel hota aur ek naye tareeke se maine life ko dekhna shuru kiya Hai.',
        name: 'Taslim Sheikh',
        position: 'Businessman'
    },
    {
        title: 'Obsessive Compulsive Disorder (OCD)',
        content: 'If you’re reading this, unsure whether to proceed, just pick up the phone! Deciding to begin therapy was one of the best decisions I ever made. I spent many months struggling with obsessions, which lead to time-consuming compulsions, stress, the frustration that started spoiling my Personal, Social and professional life From the very first session, I found Mr Aftab very easy to talk to. He allowed me to open up as and when I felt ready and talk about things which disturbed my mental health.He helped me see things in a new light and also different ways to handle obsessions. Our therapy sessions were always helpful and left me feeling very positive and confident. I would recommend him to someone feeling anxious or unsure about therapy. The experience is life-changing.!!',
        name: 'Naima',
        position: 'M Pharm Professor'
    },
    {
        title: 'Career Guidance Seminar',
        content: 'It was a great and amazing experience to be in his Career Guidance seminar. We as organizer got an awesome feedback of students and guardians about the seminar. People feel like an eye opener for alot of career opportunities which they never been informed about. Such session which relates the skill sets and intelligence of students with the Career options which they can choose are going to bring phenomenal difference.We are really happy with the inspirational and brilliant work of Mr. Aftab Siddique We really feel proud, happy and honored for associating Mr. Aftab Siddique with our organization SMWA.We are confident that under the Guidance of Aftab Sir our students are going to achieve their dream and will flourish their career."',
        name: 'Mohammad Yusuf',
        position: 'Gen.Secretary'
    }
]

export default function Testimonials() {
    return (
        <section className="ftco-section testimony-section">
            <div className="img img-bg border" style={{ backgroundImage: "url(images/bg_4.jpg)" }}></div>
            <div className="overlay"></div>
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                        <span className="subheading">Testimonial</span>
                        <h2 className="mb-3">Happy Clients</h2>
                    </div>
                </div>
                <div className="row ftco-animate">
                    <div className="col-md-12">
                        <div className="carousel-testimony owl-carousel ftco-owl">
                            {testimonials.map((testimonial: testimonialProps, i: Key ) => 
                                <div className="item" key={i}>
                                    <div className="testimony-wrap py-4">
                                        <div className="icon d-flex align-items-center justify-content-center"><span
                                            className="fa fa-quote-left" /></div>
                                        <div className="text">
                                            <p className="font-weight-bold">{testimonial.title}</p>
                                            <ExpandText
                                                maxLength={150}
                                                className='testimonial'
                                                text={testimonial.content}
                                            />
                                            <div className="d-flex align-items-center">
                                                <div className="user-img" style={{ backgroundImage: "url(images/user.jpg)" }}></div>
                                                <div className="pl-3">
                                                    <p className="name">{testimonial.name}</p>
                                                    <span className="position">{testimonial.position}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}