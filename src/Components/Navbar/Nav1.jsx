import React, { useState } from "react";
import "./Nav1.css";

const Nav1 = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<nav className={`nav-container ${isOpen ? "openNav" : ""}`}>
				<a className="a1" href="/#">
					<img
						className="brand-logo"
						alt="apexpay logo"
						src="https://apexpay.org/static/svg/apexpay-logo.svg"
					/>
				</a>

				<a className="auth-btn auth-btn2" href="/#" target="_blank">
					Sign Up
				</a>
				<div
					className={`nav-icon ${isOpen ? "nav-anim" : ""}`}
					onClick={toggleMobileMenu}
				>
					<div className="bar1" />
					<div className="bar2" />
				</div>
				<ul className={`nav-list ${isOpen ? "mobile-nav" : ""}`}>
					<li className="nav-item nav-link">
						<a href="/#">Features</a>
					</li>
					<li className="nav-item nav-link">
						<a href="/#">FAQ</a>
					</li>
					<li className="nav-item nav-link">
						<a href="/#">About Us</a>
					</li>
					<li className="nav-item nav-link">
						<a href="/#" rel="noopener" target="_blank">
							Blog
						</a>
					</li>
					<a className="auth-btn d-none" href="/#" target="_blank">
						Login
					</a>
				</ul>
				<div className="auth-btns">
					<a className="auth-btn d-none" href="/#" target="_blank">
						Login
					</a>
					<a className="auth-btn auth-btn2" href="/#" target="_blank">
						Sign Up
					</a>
				</div>
			</nav>
		</>
	);
};

export default Nav1;
