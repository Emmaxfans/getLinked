import "./Nav.css";
import { useState } from "react";
import getLinked from "../../Assets/Icons/getlinked.svg";
import togglenav from "../../Assets/Icons/togglebtn.svg";
import closebutton from "../../Assets/Icons/close.svg";

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
		const getlinkedIcon = document.getElementById("getlinkedicon");
		if (isOpen) {
			getlinkedIcon.style.display = "block";
		} else {
			getlinkedIcon.style.display = "none";
		}
	};

	// Inside Nav component
	return (
		<div className="navbar-body">
			<div className="navbar-container">
				<div className={`navbar ${isOpen ? "responsive" : ""}`}>
					<img id="getlinkedicon" src={getLinked} alt="getLinked" />
					<img
						src={isOpen ? closebutton : togglenav}
						alt="nav-toggle"
						className="icon"
						onClick={toggleNavbar}
					/>
					<a href="#">Timeline</a>
					<a href="#">Overview</a>
					<a href="#">FAQs</a>
					<a href="#">Contact</a>
					<a href="#">
						<button className="btn-nav">Register</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Nav;
