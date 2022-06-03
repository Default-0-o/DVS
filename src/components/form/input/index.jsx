import React from "react";
import "./input.css";

const Input = ({
	name,
	type,
	value,
	onChange,
	placeholder,
	required,
	className,
	label,
	...rest
}) => {
	return (
		<div className="custom-form-input form-group mb-5">
			<input
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				className={"form-control " + className}
				placeholder={placeholder}
				required={required}
				{...rest}
			/>
			<label>{label}</label>
		</div>
	);
};

export default Input;
