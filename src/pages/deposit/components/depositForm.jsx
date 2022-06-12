import React from "react";
import Input from "../../../components/form/input";
import TokenSelect from "../../../components/form/tokenSelect";
import { tokens } from "../../../constant/tokens";

const DepositForm = ({
	asset,
	network,
	amount,
	address,
	loading,
	assetDropdown,
	networkDropdown,
	setAsset,
	setNetwork,
	setAmount,
	setAddress,
	setAssetDropdown,
	setNetworkDropdown,
	handleSubmit,
}) => {
	return (
		<div className="card  col-11 col-sm-8 col-md-7 col-xl-5 col-xxl-4 ">
			<form className="deposit-box card-body text-end">
				<h3 className="mb-14">Deposit</h3>
				<TokenSelect
					label="Asset"
					value={asset.title}
					onClick={setAsset}
					icon
					options={tokens}
					showDropdown={assetDropdown}
					onClickDropdown={(status) => {
						setAssetDropdown(status);
						setNetworkDropdown(false);
					}}
				/>
				<TokenSelect
					label="Network"
					value={network.title}
					onClick={setNetwork}
					options={asset.networks}
					showDropdown={networkDropdown}
					onClickDropdown={(status) => {
						setNetworkDropdown(status);
						setAssetDropdown(false);
					}}
				/>
				<Input
					name="amount"
					type="text"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					placeholder="Enter amount"
					required
					label="Amount"
				/>
				<Input
					name="address"
					type="text"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					placeholder="Enter wallet address"
					required
					label="Address"
				/>

				<button
					type="submit"
					onClick={(e) => handleSubmit(e)}
					className="btn btn-dark btn-lg btn-block mb-5">
					{loading ? <span className="spinner-border"></span> : "Deposit"}
				</button>
			</form>
		</div>
	);
};

export default DepositForm;
