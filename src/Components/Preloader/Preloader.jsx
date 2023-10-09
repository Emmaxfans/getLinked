// src/components/Preloader.js
import { useState, useEffect } from "react";
import "./Preloader.css";

const Preloader = () => {
	const [Preloader, setIsPreloader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsPreloader(false);
		}, 12000);
	}, []);
	return (
		<>
			{Preloader && (
				<div className="preloader">
					<div className="spinner"></div>
				</div>
			)}
		</>
	);
};

export default Preloader;
