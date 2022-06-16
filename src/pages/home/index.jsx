import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Table from "../../components/table";
import { instance as axios } from "../../config";
import "./home.css";

const Home = () => {
	const { pathname } = useLocation();

	const [tableName, setTableName] = React.useState("");
	const [tableBody, setTableBody] = React.useState([]);

	const headers = {
		transaction: [
			"Id",
			"Customer",
			"Network",
			"Transaction Id",
			"Address",
			"Direction",
			"Status",
			"Assets",
			"Amount",
			"MetaData",
			"Timestamp",
			"Updated",
			"Created",
		],
		address: [
			"Id",
			"Network",
			"Customer",
			"Addresses",
			"Email Status",
			"Sms Status",
			"Api Status",
			"Updated",
			"Created",
		],
		network: [
			"Id",
			"Network Name",
			"Last Proccessed Block height",
			"Proccessed Block hash",
			"Proccessed Block timestamp",
			"Updated",
			"Created",
		],
		asset: [
			"Id",
			"Asset Name",
			"Network",
			"Decimal",
			"Smart Contract Address",
			"Updated",
			"Created",
		],
		user: ["Id", "Name", "Email", "Updated", "Created"],
	};

	useEffect(() => {
		setTableName(pathname.slice(pathname.lastIndexOf("/") + 1));
	}, [pathname]);

	useEffect(() => {
		tableName &&
			axios
				.get(tableName + "Data")
				.then((res) => {
					setTableBody(res.data.data);
					toast.info("Used SQL command : \n" + res.data.query, {
						autoClose: false,
					});
				})
				.catch((err) => {
					console.log(err);
				});
	}, [tableName]);

	return (
		<div className="home">
			{tableName ? (
				<Table
					headers={headers[tableName]}
					body={tableBody}
					tableTitle={tableName.toUpperCase()}
				/>
			) : (
				<span className="spinner-border"></span>
			)}
		</div>
	);
};

export default Home;
