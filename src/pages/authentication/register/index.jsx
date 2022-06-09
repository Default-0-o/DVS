import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/form/input";
import { instance as axios } from "../../../config";
import { toast } from "react-toastify";
import { Context } from "../../../context/context";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [loading, setLoading] = useState(false);
	const { dispatcher } = useContext(Context);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== passwordConfirmation) {
			toast.error("Password confirmation is not correct !");
			return;
		}
		setLoading(true);
		axios
			.post("register", {
				name,
				email,
				password,
			})
			.then((res) => {
				localStorage.setItem("accessToken", res.data.access_token);
				dispatcher({
					token: res.data.access_token,
					credentials: { email },
				});
				toast.success("Register Successful");
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				toast.error("Email or Password is incorrect!");
				setLoading(false);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<form>
			<h3 className="mb-14">Register</h3>

			<Input
				name="Name"
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Enter your Name"
				required
				label="Name"
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
			<Input
				name="confirmpassword"
				type="password"
				value={passwordConfirmation}
				onChange={(e) => setPasswordConfirmation(e.target.value)}
				placeholder="Enter password again"
				required
				label="Password Confirmation"
			/>
			<button
				type="submit"
				onClick={(e) => handleSubmit(e)}
				className="btn btn-dark btn-lg btn-block mb-5">
				{loading ? <span className="spinner-border"></span> : "Register"}
			</button>
			<p className="text-center mb-0">
				<Link to="/login">Already have an account ?</Link>
			</p>
		</form>
	);
};

export default Register;
