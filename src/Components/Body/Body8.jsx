import "./Body8.css";
import partner from "../../Assets/Images/partner.png";

const Body8 = () => {
	return (
		<>
			<div className="partner">
				<h3>Partners and Sponsors</h3>
				<p>
					Getlinked Hackathon 1.0 is honored to have the following major
					companies as its partners and sponsors
				</p>
				<img src={partner} alt="partner-group" />
			</div>
		</>
	);
};

export default Body8;
