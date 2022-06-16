import React from "react";
import AssetRow from "./assetRow";

const AssetsCard = ({ assets }) => {
	return (
		<div className="card">
			<div className="card-body ">
				<h3 className="card-title text-end mb-8">Assets</h3>
				<div className="assets-card">
					{assets.map((asset) => (
						<AssetRow
							key={asset.id}
							name={asset.name}
							abbv={asset.abbv}
							amount={asset.amount}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default AssetsCard;
