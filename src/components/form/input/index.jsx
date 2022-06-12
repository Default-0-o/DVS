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
	animatedLabel,
	...rest
}) => {
	return (
		<div className="custom-form-input form-group mb-5">
			{!animatedLabel && <label className="label">{label}</label>}
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
			{animatedLabel && <label className="animated-label">{label}</label>}
		</div>
	);
};

export default Input;
