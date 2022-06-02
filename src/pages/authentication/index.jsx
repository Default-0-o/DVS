import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./authentication.css";

import Login from "./login";
import SignUp from "./register";

function Authentication() {
	return (
		<Router>
			<div className="d-flex justify-content-center flex-column text-end h-100">
				<div className="auth-box col-12 col-sm-6">
					<Routes>
						<Route exact path="/" element={<Login />} />
						<Route path="/sign-in" element={<Login />} />
						<Route path="/sign-up" element={<SignUp />} />
					</Routes>
				</div>
			</div>
			<div></div>
		</Router>
	);
}

export default Authentication;
