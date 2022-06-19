import React, { useState } from "react";
import "./tooltip.css";

const Tooltip = ({ content, placement, children }) => {
	const [show, setShow] = useState(false);

	const handleMouseEnter = () => {
		setShow(true);
	};

	const handleMouseLeave = () => {
		setShow(false);
	};

	return (
		<div
			className="custom-tooltip-wrapper"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			{children}
			<span className={`custom-tooltip ${placement} ${show && "show"}`}>
				{content}
			</span>
		</div>
	);
};

export default Tooltip;
