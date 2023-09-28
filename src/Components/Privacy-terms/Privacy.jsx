import "./Privacy.css";
import star1 from "../../Assets/Icons/star1.svg";
import star3 from "../../Assets/Icons/star3.svg";
import marked from "../../Assets/Icons/marked.svg";
// import lock1 from "../../Assets/Icons/lock.svg";
// import lock2 from "../../Assets/Images/lock.png";

const Privacy = () => {
	return (
		<>
			<div className="privacy">
				<div className="privacy1">
					<div className="privacy1-sub1">
						<h3>
							Privacy Policy and <br />
							<span>Terms</span>
						</h3>
						<img src={star1} alt="star" />
					</div>

					<div className="privacy1-sub2">
						<p>Last updated on September 12, 2023</p>
						<img src={star3} alt="star" />
					</div>

					<div className="sub-p">
						<p>
							Below are our privacy & policy, which outline a lot of goodies.
						</p>
						<p>it’s our aim to always take of our participant</p>
					</div>

					<div className="privacy1-sub3">
						<div className="privacy1-sub3-div">
							<p>
								At getlinked tech Hackathon 1.0, we value your privacy and are
								committed to protecting your personal information. This Privacy
								Policy outlines how we collect, use, disclose, and safeguard
								your data when you participate in our tech hackathon event. By
								participating in our event, you consent to the practices
								described in this policy.
							</p>
							<h2>Licensing Policy</h2>
							<p>Here are terms of our Standard License:</p>

							<div className="marked">
								<img src={marked} alt="check-mark" />
								<p>
									The Standard License grants you a non-exclusive right to
									navigate and register for our event
								</p>
							</div>

							<div className="marked">
								<img src={marked} alt="check-mark" />
								<p>
									You are licensed to use the item available at any free source
									sites, for your project developement
								</p>
							</div>
							<div className="privacy1-sub3-div2">
								<button>Read More</button>
							</div>
						</div>
					</div>
				</div>
				<div className="privacy2">
					{/* <img src={lock1} alt="lock1" /> */}
					{/* <img src={lock2} alt="lock2" /> */}
				</div>
			</div>
		</>
	);
};

export default Privacy;
