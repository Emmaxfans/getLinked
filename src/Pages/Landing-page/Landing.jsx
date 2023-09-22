import Faq from "../../Components/Faq/Faq";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import Intro from "../../Components/Intro/Intro";
import Nav from "../../Components/Navbar/Nav";
import Privacy from "../../Components/Privacy-terms/Privacy";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Intro />
      <Faq />
      <Privacy />
      <Footer />
    </>
  );
};

export default Landing;
