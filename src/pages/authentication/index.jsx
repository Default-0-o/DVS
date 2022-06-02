import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Bubble from "../../components/ui/bubble";
import "./authentication.css";

import Login from "./login";
import SignUp from "./register";

function Authentication() {
	return (
		<Router>
			<div className="authentication d-flex justify-content-center flex-column text-end h-100">
				<Bubble
					delay="1"
					size="600px"
					position={{
						top: "30%",
						left: "20%",
					}}
				/>
				<Bubble
					delay="0"
					size="270px"
					position={{
						top: "13%",
						left: "60%",
					}}
				/>
				<Bubble
					delay="5"
					size="126px"
					position={{
						top: "50%",
						left: "78%",
					}}
				/>
				<Bubble
					delay="2"
					size="230px"
					position={{
						top: "38%",
						left: "69%",
					}}
				/>
				<Bubble
					delay="7"
					size="380px"
					position={{
						top: "58%",
						left: "50%",
					}}
				/>
				<Bubble
					delay="4"
					size="180px"
					position={{
						top: "17%",
						left: "79%",
					}}
				/>
				<Bubble
					delay="3"
					size="190px"
					position={{
						top: "4%",
						left: "10%",
					}}
				/>
				<Bubble
					delay="9"
					size="400px"
					position={{
						top: "17%",
						left: "25%",
					}}
				/>
				<Bubble
					delay="5"
					size="250px"
					position={{
						top: "34%",
						left: "8%",
					}}
				/>
				<Bubble
					delay="6"
					size="260px"
					position={{
						top: "60%",
						left: "5%",
					}}
				/>
				<Bubble
					delay="10"
					size="185px"
					position={{
						top: "75%",
						left: "76%",
					}}
				/>
				<Bubble
					delay="3"
					size="210px"
					position={{
						top: "50%",
						left: "60%",
					}}
				/>
				<div className="auth-box col-11 col-sm-6 col-md-5 col-xl-4 col-xxl-3 card">
					<div className="card-body">
						<Routes>
							<Route exact path="/" element={<Login />} />
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<SignUp />} />
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default Authentication;
