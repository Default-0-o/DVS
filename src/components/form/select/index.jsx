import React, { useState } from "react";
import "./select.css";

const Select = ({ defaultValue, options, onClick }) => {
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<>
			<div className="custom-select p-0">
				<button
					onClick={() => setShowDropdown(!showDropdown)}
					className="btn btn-white">
					<span>{defaultValue}</span>
					<i className="fas fa-chevron-down me-5"></i>
				</button>
				{showDropdown && (
					<div className="custom-select-options">
						<ul>
							{options.map((option, index) => (
								<li
									key={index}
									onClick={() => {
										onClick(option.value);
										setShowDropdown(false);
									}}>
									<span>{option.label}</span>
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
