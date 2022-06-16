import React from "react";
import SVG from "react-inlinesvg";

const AssetRow = ({ name, abbv, amount }) => {
	return (
		<div className="row justify-content-between align-items-center assets-row">
			<SVG src={`/tokens/${abbv}.svg`} className="asset-icon" width="55" />
			<span className="fs-5 fw-bold">{name}</span>
			<span className="fs-5 fw-bold">{amount}</span>
		</div>
	);
};

export default AssetRow;
