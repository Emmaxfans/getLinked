import "./Footer.css";
import insta from "../../Assets/Icons/insta.svg";
import x from "../../Assets/Icons/x.svg";
import linked from "../../Assets/Icons/linked.svg";
import fb from "../../Assets/Icons/fb.svg";
import phone from "../../Assets/Icons/phone.svg";
import ip from "../../Assets/Icons/ip.svg";

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className=" container">
					<div className="footer-m">
						<div className="foot1">
							<span className="foot-w1">
								get<span className="foot-w11">linked</span>
							</span>
							<p className="foot-w2">
								Getlinked Tech Hackathon is a technology innovation program
								established by a group of organizations with the aim of
								showcasing young and talented individuals in the field of
								technology
							</p>
						</div>
						<div className="foot2">
							<ul className="foot-li">
								<li className="foot-w3">Useful Links</li>
								<li className="foot-li1">Overview</li>
								<li className="foot-li1">Timeline</li>
								<li className="foot-li1">FAQs</li>
								<li className="foot-li1">Register</li>
								<li className="foot-li2">
									Follow Us{" "}
									<img src={insta} className="socials" alt="instagram" />
									<img src={x} className="socials" alt="twitter" />
									<img src={fb} className="socialss" alt="facebook" />
									<img src={linked} className="socials" alt="linkedin" />
								</li>
								{/* <div className="foot-ic">
                <img src={insta} className="" alt="instagram" />
                <img src={x} className="" alt="twitter" />
                <img src={insta} className="" alt="instagram" />
                <img src={linked} className="" alt="linkedin" />
              </div> */}
							</ul>
						</div>
						<div className="foot3">
							<p className="foot-w3">Contact Us</p>
							<div className="foot-w33">
								<img src={phone} className="foot-img" alt="phone" />
								+234 6707653444
							</div>
							<div className="foot-w333">
								<img src={ip} className="foot-img" alt="location" />
								<span>
									27,Alara Street
									<br />
									<span className="foot-w34"> Yaba 100012</span>
									<br />
									<span className="foot-w34"> Lagos State</span>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="foot-last">All rights reserved. © getlinked Ltd.</div>
			</div>
		</>
	);
};

export default Footer;
