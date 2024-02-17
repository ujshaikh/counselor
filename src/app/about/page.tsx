import Appointment from "../common/sections/Appointment";
import Clients from "../common/sections/Clients";
import Testimonials from "../common/sections/Testimonials";
import AboutUs from "../components/AboutUs";
import Breadcrumbs from "../components/Breadcrumbs";

export default function About() {
	return (
		<>
			<Breadcrumbs list={[{title: 'Home', route: '/', isCurrent: false}, {title:'About Us',route:'', isCurrent: true}]} title='About Us' />
			<AboutUs />
			<Clients />
			<Testimonials />
			<Appointment />
		</>
	);
}
