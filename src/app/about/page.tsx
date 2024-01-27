import Appointment from "../common/sections/Appointment";
import Testimonials from "../common/sections/Testimonials";
import Welcome from "../common/sections/Welcome";
import Breadcrumbs from "../components/Breadcrumbs";

export default function About() {
	return (
		<>
			<Breadcrumbs list={[{title: 'Home', route: '/', isCurrent: false}, {title:'About Us',route:'', isCurrent: true}]} title='About Us' />
			<Welcome />
			<Testimonials />
			<Appointment />
		</>
	);
}
