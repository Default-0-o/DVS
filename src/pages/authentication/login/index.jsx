import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../context/context";
import Input from "../../../components/form/input";
import { instance as axios } from "../../../config";
import { toast } from "react-toastify";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setAccessToken } = useContext(Context);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("login", {
				email,
				password,
			})
			.then((res) => {
				localStorage.setItem("accessToken", res.data.access_token);
				setAccessToken(res.data.access_token);
				toast.success("Login Successful");
			})
			.catch((err) => {
				console.log(err);
				toast.error("Email or Password is incorrect!");
			});
	};

	return (
		<form>
			<h2 className="mb-14">Log in</h2>
			<Input
				name="email"
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Enter email"
				required
				label="Email"
			/>
			<Input
				name="password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Enter password"
				required
				label="Password"
			/>
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

			<button
				type="submit"
				onClick={(e) => handleSubmit(e)}
				className="btn btn-dark btn-lg btn-block mb-5	">
				Sign in
			</button>
			<p className="text-center m-0">
				<Link to="/register">Don't have an account ?</Link>
			</p>
		</form>
	);
};

export default Login;
