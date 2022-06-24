import React from "react";
import SVG from "react-inlinesvg";
import { tokens } from "../../../constant/tokens";

const AssetRow = ({ abbv, amount }) => {
	return (
		<div className="row justify-content-between align-items-center assets-row">
			<SVG
				src={`${process.env.PUBLIC_URL}/tokens/${abbv}.svg`}
				className="asset-icon"
				width="55"
			/>
			<span className="fs-5 fw-bold">{tokens[abbv].title}</span>
			<span className="fs-5 fw-bold">{amount}</span>
		</div>
	);
};

export default AssetRow;
