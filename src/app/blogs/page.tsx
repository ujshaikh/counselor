import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";

const blogs = [
    {
        title: 'Why NLP?',
        description: 'The Prophet said: "GOD created the brain and said," By My glory and my sublimity, I did not create anything else for which I have more respect than you. I give by you, I take by you, I reward and I punished by you"."/'+
        '“Ward off passing thoughts, for if you do not, they will become ideas. Ward off ideas, for if you do not, they will become desires. Fight them, for if you do not, they will become resolve and determination, and if you do not ward them off, they will become actions. If you do not resist them with their opposite, they will become habits and it will be difficult for you to get rid of them.” (Al Fawaid by Ibn al-Qayyim)/'+
        'What could be easier to justify a failure than to blame others? Spouse, boss, employees, customers, children ... the list is long. Some point their finger and say "if I have not succeeded, it is because of my family." Others blame their husband or wife. Others blame the color of their skin, the religious prejudices, and the lack of education or their physical disabilities. Some say they are too old or too young, too fat or too thin, or pretend to live in the wrong place. This is the fault of the government, the weather, family, whatever we come up with excuses such as "I am not a born salesman, doctor or engineer” and so and so forth. Till now, I\'ve never met a single woman who has given birth to a lawyer, a doctor, an engineer or a businessman! A woman gives birth to a girl or a boy. My dear brothers and sisters, all these excuses are just lies, invented to deny the truth. They are only pretexts used to avoid admitting our responsibility. I want you to be aware that when you point the finger at someone else, you also point three fingers towards you. Instead of complaining that you run out of money or time, you should rather ask ` ` How ` ` instead of ` ` Why ` `; To get the money or the time you need take the habit to ask yourself how can get the time I need or the money. When you are asking ` ` how ` ` you are forcing your mind to look for ways to find the answers, but you are asking ` ` why ` ` you are looking for causes./'+
        'As you continue to behave like you\'ve always done, you\'ll not get any better results than what you\'ve always had. Many of us remain chained to their habits, always doing and thinking within the same. If you\'re an alcoholic and you still drink, you\'ll continuously struggle with an equivalent family and health problems. If you\'re violent naturally and you systematically face events by violence, things will never change. Your life won\'t improve as long as you still behave in the same manner. The definition of insanity is doing the same thing over and over and expecting different results quoted by Einstein The situation you live in today is the sum of all the choices, good or bad, that you have made in your life. That is why you must agree to take responsibility for your own life. There’s no alternative, it\'s the acceptance of your responsibility and your ability to reply and choose your answers will determine your future success./'+
        'NLP is tool of getting hold of your mind, your negative thoughts, knowing your thinking patterns, being aware of your unconscious strategy beneath your behavior, recognition of cognitive distortions that lead spoil your relationships, your work environment etc. John Grinder (Co-developer of NLP) once said that he had identified 3 main obstacles to mastery of any skill:/'+
        '',
        date: '18-April-2024',
        img: 'images/image_1.jpg'
    },
    {
        title: 'Social Media Risks To Mental Health 2',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        date: '01-May-2024',
        img: 'images/image_2.jpg'
    },
    {
        title: 'Social Media Risks To Mental Health 3',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        date: '20-May-2024',
        img: 'images/image_3.jpg'
    },
    {
        title: 'Social Media Risks To Mental Health 4',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        date: '17-Jun-2024',
        img: 'images/image_4.jpg'
    },
    {
        title: 'Social Media Risks To Mental Health 5',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        date: '10-Jul-2024',
        img: 'images/image_5.jpg'
    },
    {
        title: 'Social Media Risks To Mental Health 6',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        date: '14-Aug-2024',
        img: 'images/image_6.jpg'
    },
    {
        title: 'Social Media Risks To Mental Health 7',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        date: '22-Aug-2024',
        img: 'images/image_7.jpg'
    },
    {
        title: 'Social Media Risks To Mental Health 8',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        date: '13-Sep-2024',
        img: 'images/image_8.jpg'
    },
    {
        title: 'Social Media Risks To Mental Health 9',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        date: '19-Sep-2024',
        img: 'images/image_9.jpg'
    }
]

export default function Blogs() {
    return (
        <>
            <Breadcrumbs list={[{ title: 'Home', route: '/', isCurrent: false }, { title: 'Blogs', route: '', isCurrent: true }]} title='Blogs' />

            <section className="ftco-section">
                <div className="container">
                    <div className="row d-flex">
                        {blogs && blogs.map((item, key) => 
                            <div key={key} className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry justify-content-end">
                                    <div className="text text-center">
                                        <Link href={`/blogs/${item.title}`} className="block-20 img" style={{ backgroundImage: `url('${item.img}')` }} />
                                        <div className="meta text-center mb-2 d-flex align-items-center justify-content-center">
                                            <div>
                                                {item.date.split('-').map((d,i) =>
                                                    <>
                                                        {i === 0 && <span key={i} className="day">{d}</span>}
                                                        {i === 1 && <span key={i} className="mos">{d}</span>}
                                                        {i === 2 && <span key={i} className="yr">{d}</span>}
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        <h3 className="heading mb-3"><a href="#">{item.title}</a></h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center">
                            <div className="block-27">
                            <ul>
                                <li><a href="#">&lt;</a></li>
                                <li className="active"><span>1</span></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">&gt;</a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}