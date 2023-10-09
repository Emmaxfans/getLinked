import Body1 from "../../Components/Body/Body1";
import Body2 from "../../Components/Body/Body2";
import Body3 from "../../Components/Body/Body3";
import Body4 from "../../Components/Body/Body4";
import Body8 from "../../Components/Body/Body8";
import Faq from "../../Components/Faq/Faq";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import Nav from "../../Components/Navbar/Nav";
import Nav1 from "../../Components/Navbar/Nav1";
import Preloader from "../../Components/Preloader/Preloader";
import Privacy from "../../Components/Privacy-terms/Privacy";
import "./Landing.css";

const Landing = () => {
	return (
		<>
			{/* <Preloader /> */}
			<Nav />
			{/* <Nav1 /> */}
			<Hero />
			<Body1 />
			<Body2 />
			<Body3 />
			<Body4 />
			{/* <Faq /> */}
			<Body8 />
			<Privacy />
			<Footer />
		</>
	);
};

export default Landing;
