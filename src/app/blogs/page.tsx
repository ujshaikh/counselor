import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";

const blogs = [
    {
        title: 'Social Media Risks To Mental Health 1',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
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