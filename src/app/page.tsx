import Appointment from "./common/sections/Appointment";
import HowItWorks from "./common/sections/HowItWorks";
import Introduction from "./common/sections/Introduction";
import OurServices from "./common/sections/OurServices";
import Packages from "./common/sections/Packages";
import RecentBlogs from "./common/sections/RecentBlogs";
import Slider from "./common/sections/Slider";
import Testimonials from "./common/sections/Testimonials";
import Welcome from "./common/sections/Welcome";

export default function Home() {
	return (
		<>
			<Slider />
			<Introduction />
			<HowItWorks />
			<Welcome />
			<OurServices />
			<Testimonials />
			<Packages />
			<Appointment />
			<RecentBlogs />
		</>
	);
}
