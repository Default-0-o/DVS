import React, { useState, useEffect } from "react";
import { instance as axios } from "../../config";
import DepositForm from "./components/depositForm";
import "./deposit.css";

const Deposit = () => {
	const [asset, setAsset] = useState({
		abbv: "BTC",
		title: "Bitcoin",
		networks: { BTC: { title: "Bitcoin" }, BEP2: { title: "BEP2" } },
	});
	const [network, setNetwork] = useState({
		title: "BTC",
	});
	const [amount, setAmount] = useState(0);
	const [address, setAddress] = useState("");
	const [loading, setLoading] = useState(false);
	const [assetDropdown, setAssetDropdown] = useState(false);
	const [networkDropdown, setNetworkDropdown] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		axios
			.post("deposit", {
				asset: asset.abbv,
				network: network.title,
				amount: parseFloat(amount),
				address: address,
			})
			.then((res) => {
				setLoading(false);
				toast.success("Deposit was successful");
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="d-flex justify-content-center align-items-center ">
			<DepositForm
				asset={asset}
				network={network}
				amount={amount}
				address={address}
				loading={loading}
				assetDropdown={assetDropdown}
				networkDropdown={networkDropdown}
				setAsset={setAsset}
				setNetwork={setNetwork}
				setAmount={setAmount}
				setAddress={setAddress}
				setAssetDropdown={setAssetDropdown}
				setNetworkDropdown={setNetworkDropdown}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};

export default Deposit;
