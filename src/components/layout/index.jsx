import React from "react";
import NavBar from "../navBar";
import "./layout.css";

const Layout = ({ children }) => {
	return (
		<div className="main">
			<NavBar />
			{children}
		</div>
	);
};

export default Layout;
