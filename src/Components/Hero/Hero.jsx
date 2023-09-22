import "./Hero.css";
import purple_bg from "../../Assets/Icons/purple-lens-flare.svg";
import star3 from "../../Assets/Icons/star3.svg";
import star4 from "../../Assets/Icons/star4.svg";
import vector4 from "../../Assets/Icons/vector4.svg";
import Hackathon_guy from "../../Assets/Images/Hackathon-guy1.png";

const Hero = () => {
	return (
		<>
			<div className="hero">
				<div className="hero1">
					<img src={star3} alt="big-idea" />
					<img src={purple_bg} alt="purple-bg" />
					<img src={star4} alt="big-idea" />
				</div>
				<div className="hero2">
					<span>
						<h3>Igniting a Revolution in HR Innovation</h3>

						<img className="hero2-img" src={vector4} alt="vector-ellipse" />
					</span>

					<div className="hero2-sub">
						<img src={Hackathon_guy} alt="big-idea" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
