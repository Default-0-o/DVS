import React from "react";
import AssetsCard from "./components/assetsCard";
import ChartCard from "./components/chartCard";
import "./wallet.css";

const Wallet = () => {
	return (
		<div className="container home">
			<div className="row justify-content-center align=items-center">
				<div className="col-12 col-xl-6 mb-16 mb-xl-0">
					<ChartCard />
				</div>
				<div className="col-12 col-xl-6">
					<AssetsCard
						assets={[
							{ id: 1, abbv: "BTC", name: "Bitcoin", amount: "0.00" },
							{ id: 2, abbv: "ETH", name: "Ethereum", amount: "0.00" },
							{ id: 3, abbv: "LTC", name: "Litecoin", amount: "0.00" },
							{ id: 4, abbv: "XRP", name: "Ripple", amount: "0.00" },
							{ id: 5, abbv: "BCH", name: "Bitcoin Cash", amount: "0.00" },
							{ id: 6, abbv: "EOS", name: "EOS", amount: "0.00" },
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Wallet;
