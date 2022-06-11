import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/navBar";
import Table from "../../components/table";
import { instance as axios } from "../../config";
import "./home.css";

const Home = () => {
	const { pathname } = useLocation();

	const [tableName, setTableName] = React.useState(
		pathname.slice(pathname.lastIndexOf("/") + 1)
	);
	const [tableBody, setTableBody] = React.useState([]);

	const headers = [
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
	];

	useEffect(() => {
		setTableName(pathname.slice(pathname.lastIndexOf("/") + 1));
	}, [pathname]);

	useEffect(() => {
		axios
			.get(tableName + "Data")
			.then((res) => {
				setTableBody(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [tableName]);

	return (
		<div className="main">
			<NavBar />
			<div className="position-relative">
				<Table headers={headers} body={tableBody} tableTitle={"Transactions"} />
			</div>
		</div>
	);
};

export default Home;
