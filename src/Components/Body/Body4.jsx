import "./Body4.css";
import casual from "../../Assets/Images/casual.png";
import star3 from "../../Assets/Icons/star3.svg";
import star4 from "../../Assets/Icons/star4.svg";
import Collapsible from "../Collapse/Collapse";

const Body4 = () => {
	return (
		<>
			<div className="bodyd">
				<div className="bodyd1">
					<img src={star4} alt="big-idea" />
					<div className="bodyd1-sub">
						<h2>
							Frequently Ask <br className="bodyd1-br" />
							<span>Question</span>
						</h2>
						<p>
							We got answers to the questions that you might want to ask about
							getlinked Hackathon 1.0
						</p>
						<Collapsible summary="Can I work on a project I started before the hackathon?">
							<p>Super cool!</p>
						</Collapsible>
						<Collapsible summary="What happens if I need help during the hackathon?">
							<p>Super cool!</p>
						</Collapsible>
						<Collapsible summary="What happens if I don't have an idea for a project?">
							<p>Super cool!</p>
						</Collapsible>
						<Collapsible summary="Can I join a team or do I have to come with one?">
							<p>Super cool!</p>
						</Collapsible>
						<Collapsible summary="What happens after the hackathon ends">
							<p>Super cool!</p>
						</Collapsible>
						<Collapsible summary="Can I work on a project I started before the hackathon?">
							<p>Super cool!</p>
						</Collapsible>
					</div>
				</div>
				<div className="bodyd2">
					<img src={star3} alt="big-idea" />
					<img src={star4} alt="big-idea" />
					<img src={casual} alt="marked-ideas" />
					<img src={star4} alt="big-idea" />
				</div>
			</div>
		</>
	);
};

export default Body4;
