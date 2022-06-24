import React, { useState } from "react";
import Svg from "react-inlinesvg";
import "./tokenSelect.css";

const TokenSelect = ({
	value,
	onClick,
	label,
	options,
	icon,
	showDropdown,
	onClickDropdown,
}) => {
	return (
		<>
			<div className="custom-token-select p-0 mb-5">
				{label && <label>{label}</label>}

				<button
					onClick={() => onClickDropdown(!showDropdown)}
					className="btn btn-white d-flex justify-content-between align-items-center">
					<span>{value}</span>
					<i className="fas fa-chevron-down me-5"></i>
				</button>
				{showDropdown && (
					<div className="custom-token-select-options">
						<ul>
							{Object.keys(options).map((token, index) => (
								<li
									key={index}
									onClick={() => {
										onClick({
											abbv: token,
											...options[token],
										});
										onClickDropdown(false);
									}}>
									{icon && (
										<Svg
											src={`/tokens/${token}.svg`}
											width="30"
											height="30"
											className="me-2 ms-5"
										/>
									)}
									<span className="fs-5 fw-bolder">
										{options[token].title}{" "}
										<span className="me-1 fs-7 text-muted">({token})</span>
									</span>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</>
	);
};
export default TokenSelect;
