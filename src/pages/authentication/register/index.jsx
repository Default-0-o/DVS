import React, { Component } from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<form>
			<h3 className="mb-10">Register</h3>

			<div className="form-group mb-5	">
				<label className="fw-bolder">First name</label>
				<input type="text" className="form-control" placeholder="First name" />
			</div>

			<div className="form-group mb-5	">
				<label className="fw-bolder">Last name</label>
				<input type="text" className="form-control" placeholder="Last name" />
			</div>

			<div className="form-group mb-5	">
				<label className="fw-bolder">Email</label>
				<input
					type="email"
					className="form-control"
					placeholder="Enter email"
				/>
			</div>

			<div className="form-group mb-7	">
				<label className="fw-bolder">Password</label>
				<input
					type="password"
					className="form-control"
					placeholder="Enter password"
				/>
			</div>

			<button type="submit" className="btn btn-dark btn-lg btn-block mb-5">
				Register
			</button>
			<p className="text-center mb-0">
				<Link to="/login">Already have an account ?</Link>
			</p>
		</form>
	);
};

export default Register;
