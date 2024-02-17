'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

const menu = [
	{
		route: '/',
		title: 'Home'
	},
	{
		route: '/about',
		title: 'About'
	},
	{
		route: '/services',
		title: 'Services'
	},
	{
		route: '/pricing',
		title: 'Pricing'
	},
	{
		route: '/blogs',
		title: 'Blog'
	},
	{
		route: '/contact',
		title: 'Contact'
	},
]

export const NavBar = () => {
	const [isMenuClicked, setMenuClicked] = useState(false)
	const [activeNav, setActiveNav] = useState<any>(0)
	const router = useRouter();

	const handleMenuClick = (e: SyntheticEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setMenuClicked(!isMenuClicked)
	}

	const handleMenuItemClick = (e: SyntheticEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		const index = e.currentTarget.dataset.index
		setActiveNav(index)
		router.push(e.currentTarget.href)
		router.refresh()
	}

	return (
		<>
			<div className="wrap">
				<div className="container">
					<div className="row">
						<div className="col-md-6 d-flex align-items-center">
							<p className="mb-0 phone pl-md-2 text-nowrap">
								<a href="tel:+919833749190" className="mr-2"><span className="fa fa-phone mr-1"></span> +91 983 374 9190</a>
								<a href="mailto:aftablifecoach@gmail.com"><span className="fa fa-paper-plane mr-1"></span> aftablifecoach@gmail.com</a>
							</p>
						</div>
						<div className="col-md-6 d-flex justify-content-md-end no-mobile">
							<div className="social-media">
								<p className="mb-0 d-flex">
									<a href="#" className="d-flex align-items-center justify-content-center"><span
										className="fa-brands fa-facebook-f"><i className="sr-only">Facebook</i></span></a>
									<a href="#" className="d-flex align-items-center justify-content-center"><span
										className="fa-brands fa-twitter"><i className="sr-only">Twitter</i></span></a>
									<a href="#" className="d-flex align-items-center justify-content-center"><span
										className="fa-brands fa-instagram"><i className="sr-only">Instagram</i></span></a>
									<a href="#" className="d-flex align-items-center justify-content-center"><span
										className="fa-brands fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
				<div className="container">
					<a className="navbar-brand" href="/"><Image src="/images/logo.png" width={250} height={50} alt="logo" /></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
						aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleMenuClick}>
						<span className={`fas fa-${isMenuClicked ? 'times' : 'bars'}`}></span>{isMenuClicked} Menu
					</button>

					<div className="collapse navbar-collapse" id="ftco-nav">
						<ul className="navbar-nav ml-auto">
							{menu.map((item, key) => 
								<li className={`nav-item ${key == activeNav ? 'active' : ''}`} key={key}><Link href={item.route} className="nav-link" onClick={handleMenuItemClick} data-index={key}>{item.title}</Link></li>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}