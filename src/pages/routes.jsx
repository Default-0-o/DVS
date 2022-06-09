import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./home";
import Authentication from "./authentication";
import Login from "./authentication/login";
import Register from "./authentication/register";
import Logout from "./authentication/logout";
import { Context } from "../context/context";

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

	if (user.token) {
		routes = (
			<Routes>
				<Route path="/logout" element={<Logout />} />
				<Route path="/records/transactions" element={<Home />} />
				<Route path="/records/customers" element={<Home />} />
				<Route path="/records/networks" element={<Home />} />
				<Route path="/records/addresses" element={<Home />} />
				<Route path="/records/assets" element={<Home />} />
				<Route
					path="*"
					element={<Navigate to="/records/transactions" replace />}
				/>
			</Routes>
		);
	}

	return routes;
};

export default AppRoutes;
