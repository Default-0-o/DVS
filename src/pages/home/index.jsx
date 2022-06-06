import React from "react";
import Table from "../../components/table";
import NavBar from "../../components/navBar";
import { useLocation } from "react-router-dom";
import "./home.css";

const Home = () => {
	const { pathname } = useLocation();

	const [table, setTable] = React.useState(
		pathname.slice(pathname.lastIndexOf("/") + 1)
	);

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
	const body = new Array(99).fill([
		"1",
		"John Doe",
		"Bitcoin",
		"1s2d3f4g5h6j7k8l9m0",
		"0x1234567890123456789012345678901234567890",
		"Deposit",
		"Completed",
		"158.00",
		"0.00",
		"6874dasd",
		"2019-01-01T00:00:00.000Z",
		"2019-01-01T00:00:00.000Z",
		"2019-01-01T00:00:00.000Z",
	]);

	return (
		<div className="main">
			<NavBar />
			<div className="position-relative">
				<Table headers={headers} body={body} tableTitle={"Transactions"} />
			</div>
		</div>
	);
};

export default Home;
