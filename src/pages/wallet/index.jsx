import React, { useEffect, useState } from "react";
import AssetsCard from "./components/assetsCard";
import ChartCard from "./components/chartCard";
import { instance as axios } from "../../config";
import { toast } from "react-toastify";

import "./wallet.css";

const Wallet = () => {
	const [balance, setBalance] = useState([]);

	useEffect(() => {
		axios
			.get("/walletData")
			.then((res) => {
				setBalance(res.data.data);
				toast.info("Used SQL command : \n" + res.data.query, {
					autoClose: false,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="container home">
			<div className="row justify-content-center align=items-center">
				<div className="col-12 col-xl-6 mb-16 mb-xl-0">
					<ChartCard data={balance} />
				</div>
				<div className="col-12 col-xl-6">
					<AssetsCard assets={balance} />
				</div>
			</div>
		</div>
	);
};

export default Wallet;
