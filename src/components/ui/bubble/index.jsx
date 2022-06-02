import React from "react";
import "./bubble.css";

const Bubble = ({ size, delay, position }) => {
	return (
		<div
			className="bubble"
			style={{
				width: size,
				height: size,
				top: position.top,
				left: position.left,
				right: position.right,
				bottom: position.bottom,
				animation: "bubble 10s " + delay + "s ease-in-out infinite",
			}}></div>
	);
};

export default Bubble;
