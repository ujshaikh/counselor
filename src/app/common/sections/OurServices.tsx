'use client'
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, SyntheticEvent, useCallback, useEffect, useRef, useState } from "react"

const getKeyByString = (str: string) => str.match(/[a-z]|[0-9]|-/gi)?.join('').toLowerCase()

export default function OurServices() {
    const services = {
        'Our Programmes': [
            {
                title: 'Corporate Excellence',
                desc: 'NLP focuses on sensory experience-what you see, hear and feel. When a sensory description brings vision, goals and values to life, people start to understand, anticipate and align with them. The NLP model for goal setting is known as well-formed outcome. This kind of goal is fat motivating to people within a business than is a brief description of financial targets. Surprisingly, most company training schemes do not teach the real difference that makes the difference with respect to goals, even though they might spend millions of pounds on Goal Setting Programs. Applying NLP to the process of crafting goals, outcomes bring a whole new perspective:',
                points: 'How to set a well-defined outcome for your business./Have clarity about your present state and desired business outcome./Learn the difference between real obstacles and belief that prevents you from achieving your outcome./Visualization exercise for internal Permission for wealth./How to know you are succeeding towards your outcome through strategies & techniques./Walt Disney exercise to find the explore capabilities to set outcome and find the solutions for existing problems./Understanding the Key Factors in achieving goals/outcome./Live exercise for gathering internal resources to achieve your goals.',
                img: '/services-1.jpg'
            },
            {
                title: 'Effective Communication & Influencing Skills',
                desc: 'The journey to become an expert communicator starts with your understanding & discovering your own thinking patterns. These patterns drive the way you feel, act and respond. Everything that you experienced in your life and the way the brain filtered this information determines what you feel, value and believe. Others aren’t like you. While some people may resemble you, others don’t at all. NLP adopts the principle that all people have different maps of the world. Even two people share an experience, they notice different things, have different responses and store different memories.',
                points: 'After learning how to detect your patterns of thinking, you are likely in position to seeing and hearing patterns of others./' +
                    'Knowledge of others pattern gives you the information you need to target your words to them, as if you are speaking their language rather than your own./' +
                    'Learn to look out for hidden signals of your customer and build rapport at unconscious level./' +
                    'Engage in meaningful conversation with anyone that you meet./' +
                    'Break down mental barriers you have of shyness or social anxiety./' +
                    'Achieve robust social confidence without losing yourself in the process./' +
                    'Understand the meta-programs of others in directing their behavior./' +
                    'Live perceptual position exercise to look things from others point of view.',
                img: '/services-2.jpg'
            },
            {
                title: 'Stress Management (A mature understanding approach)',
                desc: 'Stress is a constant in all our lives. The pressure to meet our work deadlines, deliver a speech, at home, at work, online, at University, and even with friends or family. Men and women who want to succeed professionally by strengthening their mindset and maximizing their effectiveness. Learn how to manage stress and anxiety with powerful NLP techniques and strategies.',
                points: 'Learn How To Deal With Stress & Anxiety Before It Becomes A Health Problem./' +
                    'Identify and Change Your Habitual Response Patterns./' +
                    'Face Future Challenges with Greater Confidence & Ease./' +
                    'Understand What Stress Is & Realise Where It Comes From./' +
                    'Eliminate Negativity, Frustration Etc. From Life./' +
                    'Develop Self-Confidence With Practical Exercises./' +
                    'Exercise: Relaxation Technique To Eliminate Stress./' +
                    'Exercise: Break Patterns Of Stress And Anxiety And Stay In Resourceful Zone.',
                img: '/services-3.jpg'
            },
            {
                title: 'Depression (A complete breakthrough)',
                desc: 'We all go through tough times, When we do, little things can make a big difference to how we feel and how we cope with Life`s Ups and Downs. Depression having been on the increase for years, it is far easier to breakthrough and move beyond depression than what many people is led to believe.',
                points: 'Understand What Is Depression And Where It Comes From & How To Prevent It In Future./' +
                    'Preventive Steps For Quickly Breaking Patterns Of Depression Before It Becomes Health Problem./' +
                    'Understand how your thinking influences your emotional wellbeing./' +
                    'Harness ideas that are essential to your mental & emotional development./' +
                    'How To Identify And Change Negative Habitual Response Patterns./' +
                    'Exercise- Installing The Pattern Of Delightfulness In Places Of Where Depression Lives In Subconscious Mind./' +
                    'Exercise-Drag Away The Unwanted Past Painful Memories Which Is Root Cause Of Depression./' +
                    'Exercise- Transform Your Inner Self Image To Reprogram Your Thoughts Pattern And Much More.',
                img: '/services-4.jpg'
            },
            {
                title: 'Golden Parenting (Al Ghazali Perspective)',
                desc: 'Adopting an effective method for training children is extremely important and necessary. It is because a child is Allah’s trust in parents’ hands and the child’s heart is like a nice, clean, and simple mirror which, although, is devoid of any types of impressions or shapes, is capable of accepting the influence of all types of impressions and influences and it can be inclined towards anything you like.',
                points: 'Understanding child`s nature and parents obligation./' +
                    'Methods of persuading towards goods and forbidding from evil./' +
                    'Teaching patience,forbearance,arrogance and pride./' +
                    'Harms of excessive scolding./' +
                    'Etiquettes of gatherings and conversations./' +
                    'Transform Inner Self Image Of Child With NLP Technique./' +
                    'How To Develop Senses Of Your Child./' +
                    'Self-Suggestion For Parents And Much More.',
                img: '/services-5.jpg'
            }
        ],
        'Counselling Services': [
            {
                title: 'Uniting Faith with Professional Counselling',
                desc: 'Mental Health and Psychological Treatment are highly stigmatized in the Muslim community. Although there are many reasons for this but two major ones stand apart. First is the idea that western psychotherapy is antithetical to Islam. Although this might have been true historically,particulary in the mid-twentieth century, and it still is today with some approaches, in the past twenty five years the tide has changed significantly, with Muslim mental health professionals being at the forefront of developing theoretical models and interventions that keep Islamic faith intact with professional practice.Although we believe that prayer and other spiritual practices can be an incredible source of comfort during difficult times but failure to properly understand the complex and nuanced relationship between religions, spirituality and mental health causes confusion and perpetuates stigma. Given this context of stigma combined with the growing amount of exceptional work being done in the field of islamically integrated psychotherapy, Aftab Siddiqui a Certified Counselor on Robert Carkhuff model and a Cognitive Behaviour Therapy (REBT) Practitioner and NLP Master Practitioner felt it an opportune time to bring this services to public.',
                img: '/services-1.jpg'
            },
            {
                title: 'Objectives of Faith Integrated Therapy',
                points: 'Applying Islamic teaching based on al Qur’an and Sunnah as a major foundation to identify and replace unhelpful thoughts and behaviors to reduce psychological problems./' +
                    'Replacing and reframing negative and inaccurate thoughts with positive principles found in the Qur’an & hadith that promote mental and spiritual health along with CBT and NLP techniques./' +
                    'Building and regulating positive behavioral patterns to combat psychological problems through act of forgiveness, gratitude, generosity, and altruism, prayers and social contact with members of their religious community./' +
                    'Imparting knowledge on al Ghazali’s concept of Self (Body, Ruh, Qalb, Nafs and Aql) and Tazkiyah al Nafs (Purification of the Heart).',
                img: '/services-2.jpg'
            },
            {
                title: 'Assessment Model',
                desc: 'Since the focus of the model is essentially on spiritual integration, the assessment is divided into two components: Psychiatric and Spiritual with six major goals:',
                points: 'Building the therapeutic alliance and introduction Islamic Integrated Treatment model./' +
                    'Diagnosis and conceptualization./' +
                    'Assessment of internal and external psycho-spiritual functioning./' +
                    'Psychoeducation and setting therapeutic goals./' +
                    'Assessment of stage of change./' +
                    'Hope and Relapse Prevention.',
                img: '/services-3.jpg'
            }
        ]
    }

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

const ServiceCategories = ({ services }: any) => {
    const data = Object.keys(services)

    const [activeAccordionIndex, setActiveIndex] = useState(0)

    const handleClick = (e: SyntheticEvent) => {
        const index = e.target.dataset.index
        setActiveIndex(index)
    }

    return (
        data.map((service, i) => (
            <div className="servicesAccordion" id={`accordion-${i}`} key={i}>
                <div className="card">
                    <div className="card-header" id={`heading-${i}`}>
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" aria-expanded={activeAccordionIndex == i ? 'true' : 'false'} data-index={i} data-title={service} onClick={handleClick}>
                                {service}
                            </button>
                        </h2>
                    </div>

                    <div className={`collapse ${activeAccordionIndex == i ? 'show' : 'fade'}`}>
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