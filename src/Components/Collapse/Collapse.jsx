import React from "react";
import "./Collapse.css";

const Collapse = ({ summary, children }) => {
	return (
		<>
			<details>
				<summary>{summary}</summary>
				{children}
			</details>
			<hr className="collapse-hr" />
		</>
	);
};

export default Collapse;
