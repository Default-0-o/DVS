import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../../../components/form/input";

const Register = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("", {
				firstName,
				lastName,
				email,
				password,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<form>
			<h3 className="mb-14">Register</h3>

			<Input
				name="firstName"
				type="text"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
				placeholder="Enter first name"
				required
				label="First name"
			/>
			<Input
				name="lastName"
				type="text"
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
				placeholder="Enter last name"
				required
				label="Last name"
			/>
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
			<button
				type="submit"
				onClick={(e) => handleSubmit(e)}
				className="btn btn-dark btn-lg btn-block mb-5">
				Register
			</button>
			<p className="text-center mb-0">
				<Link to="/login">Already have an account ?</Link>
			</p>
		</form>
	);
};

export default Register;
