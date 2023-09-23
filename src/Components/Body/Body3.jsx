import "./Body3.css";
import idea_sharing from "../../Assets/Images/pie-chart.png";
import star3 from "../../Assets/Icons/star3.svg";
import star4 from "../../Assets/Icons/star4.svg";

const Body3 = () => {
	return (
		<div>
			<div className="bodyc">
				<div className="bodyc1">
					<img src={star3} alt="big-idea" />
					<div className="bodyc1-bg"></div>
					<img src={idea_sharing} alt="big-idea" />
					<img src={star4} alt="big-idea" />
				</div>
				<div className="bodyc2">
					<div className="bodyc2-sub">
						<h2>
							Judging Criteria <br />
							<span>Key attributes</span>
						</h2>
						<p>
							<span>Innovation and Creativity</span>: Evaluate the uniqueness
							and creativity of the solution. Consider whether it addresses a
							real-world problem in a novel way or introduces innovative
							features.
						</p>

						<p>
							<span>Functionality</span>: Assess how well the solution works.
							Does it perform its intended functions effectively and without
							major issues? Judges would consider the completeness and
							robustness of the solution.
						</p>

						<p>
							<span>Impact and Relevance</span>: Determine the potential impact
							of the solution in the real world. Does it address a significant
							problem, and is it relevant to the target audience? Judges would
							assess the potential social, economic, or environmental benefits.
						</p>

						<p>
							<span>Technical Complexity</span>: Evaluate the technical
							sophistication of the solution. Judges would consider the
							complexity of the code, the use of advanced technologies or
							algorithms, and the scalability of the solution.
						</p>

						<p>
							<span>Adherence to Hackathon Rules</span>: Judges will Ensure that
							the team adhered to the rules and guidelines of the hackathon,
							including deadlines, use of specific technologies or APIs, and any
							other competition-specific requirements.
						</p>
						<button>Read More</button>
					</div>

					<img src={star4} alt="big-idea" />
				</div>
			</div>
		</div>
	);
};

export default Body3;
