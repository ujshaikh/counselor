import Script from "next/script";

export default function Footer() {
	return (
		<>
			<footer className="ftco-footer">
				<div className="container">
					<div className="row mb-5">
						<div className="col-sm-12 col-md">
							<div className="ftco-footer-widget mb-4">
								<h2 className="ftco-heading-2 logo"><a href="#">Aftab Siddiqui</a></h2>
								<p>Conscientious and caring counselor with extensive knowledge of offering advice, support, and guidance...</p>
								<ul className="ftco-footer-social list-unstyled mt-2">
									<li className="ftco-animate"><a href="#"><span className="fa-brands fa-twitter"></span></a></li>
									<li className="ftco-animate"><a href="#"><span className="fa-brands fa-facebook"></span></a></li>
									<li className="ftco-animate"><a href="#"><span className="fa-brands fa-instagram"></span></a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-12 col-md">
							<div className="ftco-footer-widget mb-4 ml-md-4">
								<h2 className="ftco-heading-2">Explore</h2>
								<ul className="list-unstyled">
									<li><a href="#"><span className="fa fa-chevron-right mr-2"></span>About</a></li>
									<li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Contact</a></li>
									<li><a href="#"><span className="fa fa-chevron-right mr-2"></span>What We Do</a></li>
									<li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Plans &amp; Pricing</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-12 col-md">
							<div className="ftco-footer-widget mb-4 ml-md-4">
								<h2 className="ftco-heading-2">Legal</h2>
								<ul className="list-unstyled">
									<li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Join us</a></li>
									<li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Blog</a></li>
									<li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Privacy &amp; Policy</a></li>
									<li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Term &amp; Conditions</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-12 col-md">
							<div className="ftco-footer-widget mb-4">
								<h2 className="ftco-heading-2">Company</h2>
								<ul className="list-unstyled">
									<li><a href="#"><span className="fa fa-chevron-right mr-2"></span>About Us</a></li>
									<li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Blog</a></li>
									<li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Contact</a></li>
									<li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Careers</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-12 col-md">
							<div className="ftco-footer-widget mb-4">
								<h2 className="ftco-heading-2">Have a Questions?</h2>
								<div className="block-23 mb-3">
									<ul>
										<li><span className="icon fa fa-map marker"></span><span className="text">B-32, 2nd Floor, Raj Complex, Military road , Marol , Mumbai - 59</span></li>
										<li><a href="#"><span className="icon fa fa-phone"></span><span className="text">+91 983 374 9190</span></a></li>
										<li><a href="#"><span className="icon fa fa-paper-plane pr-4"></span><span
											className="text">aftablifecoach@gmail.com</span></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid px-0 py-5 bg-black">
					<div className="container">
						<div className="row">
							<div className="col-md-12">

								<p className="mb-0" style={{ color: "rgba(255,255,255,.5)" }}>Copyright &copy;{new Date().getFullYear()} All rights reserved | This
									template is made with <i className="fa fa-heart color-danger" aria-hidden="true"></i> by <a
										href="https://utechzo.com" target="_blank">Utechzo.com</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px">
				<circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
				<circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10"
					stroke="#F96D00" />
			</svg></div>

			<Script type="text/javascript" src="/js/jquery.min.js" />
			<Script type="text/javascript" src="/js/jquery-migrate-3.0.1.min.js" />
			<Script type="text/javascript" src="/js/popper.min.js" />
			<Script type="text/javascript" src="/js/bootstrap.min.js" />
			<Script type="text/javascript" src="/js/jquery.easing.1.3.js" />
			<Script type="text/javascript" src="/js/jquery.waypoints.min.js" />
			<Script type="text/javascript" src="/js/jquery.stellar.min.js" />
			<Script type="text/javascript" src="/js/owl.carousel.min.js" />
			<Script type="text/javascript" src="/js/jquery.magnific-popup.min.js" />
			<Script type="text/javascript" src="/js/jquery.animateNumber.min.js" />
			<Script type="text/javascript" src="/js/scrollax.min.js" />
			<Script type="text/javascript" src="/js/main.js" />
		</>
	)
}