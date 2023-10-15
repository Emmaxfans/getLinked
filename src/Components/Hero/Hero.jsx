import "./Hero.css";
import purple_bg from "../../Assets/Icons/purple-lens.svg";
import star3 from "../../Assets/Icons/star3.svg";
import star4 from "../../Assets/Icons/star4.svg";
import vector4 from "../../Assets/Icons/vector4.svg";
import Hackathon_guy from "../../Assets/Images/Hackathon-guy1.png";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
	return (
		<>
			{/* <div className="hero"></div> */}

			<div className="hero">
				<div className="hero1">
					<div className="hero-conx">
						{/* <div className="hero1-bg"> */}
						<img src={star3} alt="big-idea" />
						<img src={purple_bg} alt="purple-bg" />
						<img src={star4} alt="big-idea" />
						{/* </div> */}
					</div>

					<div className="hero-cony">
						<span>
							<h3>
								<Typewriter
									words={["Igniting a Revolution in HR Innovation"]}
									loop={0}
									cursor
									cursorStyle="|"
									typeSpeed={70}
									deleteSpeed={50}
									delaySpeed={1000}
								/>
							</h3>
						</span>
						{/* <h3>Igniting a Revolution in HR Innovation</h3> */}
						<img className="hero-cony-img" src={vector4} alt="vector-ellipse" />

						{/* <span>
							<h3>Igniting a Revolution in HR Innovation</h3>
						</span> */}
					</div>
				</div>

				<div className="hero2">
					<div className="hero2-con1">
						<div className="hero-con2">
							<h3>
								getlinked Tech <br /> Hackathon
								<span className="hero-con2-span">1.0</span>
							</h3>
							<div className="hero-con3x">
								<p>
									Participate in getlinked tech Hackathon 2023 stand a chance to
									win a Big prize
								</p>
								<button>Register</button>
								<p className="pxxx">
									<span>00M</span>
									<span>00M</span>
									<span>00M</span>
								</p>
							</div>
						</div>
					</div>

					<div className="hero2-con2">
						<div className="hero2-con2-sub">
							<img src={Hackathon_guy} alt="big-idea" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
