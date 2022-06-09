import React from "react";
import Bubbles from "./../../components/ui/bubbles/index";
import "./authentication.css";

function Authentication({ children }) {
	return (
		<div className="authentication d-flex justify-content-center flex-column text-end h-100">
			<Bubbles />
			<div className="auth-box col-11 col-sm-6 col-md-5 col-xl-4 col-xxl-3 card">
				<div className="card-body">{children}</div>
			</div>
		</div>
	);
}

export default Authentication;
