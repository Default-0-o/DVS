import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	axios
		.post("", {
			email: "",
			password: "",
		})
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});

	return (
		<form>
			<h2 className="mb-10">Log in</h2>

			<div className="form-group mb-5">
				<label className="fw-bolder">Email</label>
				<input
					type="email"
					className="form-control"
					placeholder="Enter email"
				/>
			</div>

			<div className="form-group mb-5">
				<label className="fw-bolder">Password</label>
				<input
					type="password"
					className="form-control"
					placeholder="Enter password"
				/>
			</div>

			<div className="form-group mb-7">
				<div className="custom-control custom-checkbox">
					<input
						type="checkbox"
						className="custom-control-input"
						id="customCheck1"
					/>
					<label className="me-2 custom-control-label" htmlFor="customCheck1">
						Remember me
					</label>
				</div>
			</div>

			<button type="submit" className="btn btn-dark btn-lg btn-block mb-5	">
				Sign in
			</button>
			<p className="text-center m-0">
				<Link to="/register">Don't have an account ?</Link>
			</p>
		</form>
	);
};

export default Login;
