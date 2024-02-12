'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { useScrollDirection } from "react-use-scroll-direction";
// import $ from 'jquery';

// function loadExternalScript(url:string) {
//     const script = document.createElement('script');
//     script.src = url;
//     script.async = true;
//     document.body.appendChild(script);
//     script.onload = function() {
//       console.log('Script loaded successfully!');
//     };
//   }

export default function Breadcrumbs(props: {list: Object[], title: string}) {
    const [title, setTitle] = useState('')
    const [list, setList] = useState([{}])

    // const [direction, setDirection] = React.useState(String)
    // const { isScrollingUp, isScrollingDown } = useScrollDirection()

    useEffect(() => {
        setTitle(props.title)
        setList(props.list)
    }, [props.list, props.title])

    // useEffect(() => {
    //     isScrollingDown && setDirection('down')
    //     isScrollingUp && setDirection('up')
    // }, [isScrollingDown, isScrollingUp])


    // const contentWayPoint = () => {
    // 	let i = 0;
    // 	$('.ftco-animate').each((j,el) => {

    // 		if(!$(el).hasClass('ftco-animated') ) {
                
    // 			i++;

    // 			$(el).addClass('item-animate');
    // 			setTimeout(function(){

    // 				$('body .ftco-animate.item-animate').each(function(k){
    // 					var el = $(this);
    // 					setTimeout( function () {
    // 						var effect = el.data('animate-effect');
    // 						if ( effect === 'fadeIn') {
    // 							el.addClass('fadeIn ftco-animated');
    // 						} else if ( effect === 'fadeInLeft') {
    // 							el.addClass('fadeInLeft ftco-animated');
    // 						} else if ( effect === 'fadeInRight') {
    // 							el.addClass('fadeInRight ftco-animated');
    // 						} else {
    // 							console.log('Adding cls')
    // 							el.addClass('fadeInUp ftco-animated');
    // 						}
    // 						el.removeClass('item-animate');
    // 					},  k * 50, 'easeInOutExpo' );
    // 				});
                    
    // 			}, 100);
                
    // 		}
    //     })
    // 	// } , { offset: '95%' } );
    // };

    return (
        <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('images/bg_5.jpg')" }} data-stellar-background-ratio={0.5}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text align-items-end justify-content-center">
                    <div className="col-md-9 mb-5 text-center">
                        <p className="breadcrumbs mb-0">
                            {list && list.map((item:any, key:number) => 
                                !item.isCurrent && item?.routes
                                ? <span key={key} className="mr-2"><Link href={item.route}>{item.title} <i className="fa fa-chevron-right"></i></Link></span> 
                                : <span key={key}>{item.title} <i className="fa fa-chevron-right"></i></span>
                            )}
                        </p>
                        <h1 className="mb-0 bread animate__animated animate__fadeIn animate__delay-2s">{title}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}