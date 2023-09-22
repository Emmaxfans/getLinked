import Body1 from "../../Components/Body/Body1";
import Body2 from "../../Components/Body/Body2";
import Body3 from "../../Components/Body/Body3";
import Faq from "../../Components/Faq/Faq";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import Nav from "../../Components/Navbar/Nav";
import Privacy from "../../Components/Privacy-terms/Privacy";
import "./Landing.css";

const Landing = () => {
	return (
		<>
			<Nav />
			<Hero />
			<Body1 />
			<Body2 />
			<Body3 />
			{/* <Faq /> */}
			{/* <Privacy /> */}
			<Footer />
		</>
	);
};

export default Landing;
