import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./home";
import Authentication from "./authentication";
import Login from "./authentication/login";
import Register from "./authentication/register";
import Logout from "./authentication/logout";
import { Context } from "../context/context";
import Deposit from "./deposit";

const AppRoutes = () => {
	const { user } = useContext(Context);

	let routes = (
		<Authentication>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<Navigate to="/login" replace />} />
			</Routes>
		</Authentication>
	);

	if (user.token || localStorage.getItem("accessToken")) {
		routes = (
			<Routes>
				<Route path="/logout" element={<Logout />} />
				<Route path="/deposit" element={<Deposit />} />
				<Route path="/records/transaction" element={<Home />} />
				<Route path="/records/user" element={<Home />} />
				<Route path="/records/network" element={<Home />} />
				<Route path="/records/address" element={<Home />} />
				<Route path="/records/asset" element={<Home />} />
				<Route
					path="*"
					element={<Navigate to="/records/transaction" replace />}
				/>
			</Routes>
		);
	}

	return routes;
};

export default AppRoutes;
