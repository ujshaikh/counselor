import Appointment from "./common/sections/Appointment";
import Clients from "./common/sections/Clients";
import HowItWorks from "./common/sections/HowItWorks";
import Introduction from "./common/sections/Introduction";
import OurServices from "./common/sections/OurServices";
import Packages from "./common/sections/Packages";
import RecentBlogs from "./common/sections/RecentBlogs";
import Slider from "./common/sections/Slider";
import Testimonials from "./common/sections/Testimonials";
import Welcome from "./common/sections/Welcome";
import AboutUs from "./components/AboutUs";

export default function Home() {
	return (
		<>
			<Slider />
			<Introduction />
			<AboutUs />
			<HowItWorks />
			<Welcome />
			<Clients />
			<OurServices />
			<Testimonials />
			<Packages />
			<Appointment />
			<RecentBlogs />
		</>
	);
}
