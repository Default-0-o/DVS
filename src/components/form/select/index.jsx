import React, { useState } from "react";
import "./select.css";

const Select = ({ value, options, onClick, label }) => {
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<>
			<div className="custom-select p-0">
				{label && <label>{label}</label>}

				<button
					onClick={() => setShowDropdown(!showDropdown)}
					className="btn btn-white">
					<span>{value}</span>
					<i className="fas fa-chevron-down me-5"></i>
				</button>
				{showDropdown && (
					<div className="custom-select-options">
						<ul>
							{options.map((option, index) => (
								<li
									key={index}
									onClick={() => {
										onClick(typeof option === "object" ? option.value : option);
										setShowDropdown(false);
									}}>
									<span>
										{typeof option === "object" ? option.label : option}
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

export default Select;
