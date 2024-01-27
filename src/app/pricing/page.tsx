import Appointment from "../common/sections/Appointment";
import Packages from "../common/sections/Packages";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Pricing () {
    return (
        <>
            <Breadcrumbs list={[{ title: 'Home', route: '/', isCurrent: false }, { title: 'Services', route: '', isCurrent: true }]} title='Services' />
            <Packages />
            <Appointment />
        </>
    )
}