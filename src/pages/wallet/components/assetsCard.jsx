import React from "react";
import AssetRow from "./assetRow";

const AssetsCard = ({ assets }) => {
	return (
		<div className="card">
			<div className="card-body ">
				<h3 className="card-title text-end mb-8">Assets</h3>
				<div className="assets-card">
					{assets.map((asset) => {
						return (
							asset.balance > 0 && (
								<AssetRow
									key={asset.id}
									abbv={asset.asset}
									amount={asset.balance}
								/>
							)
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AssetsCard;
