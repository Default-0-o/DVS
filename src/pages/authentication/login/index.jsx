import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
	render() {
		return (
			<form>
				<h3 className="mb-10">Log in</h3>

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

				<div className="form-group mb-8">
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

				<button type="submit" className="btn btn-dark btn-lg btn-block">
					Sign in
				</button>
				<p className="text-start m-0">
					<Link to="#">Forgot password?</Link>
				</p>
			</form>
		);
	}
}
