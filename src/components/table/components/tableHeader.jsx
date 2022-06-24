import React from "react";

const TableHeader = ({ titles }) => {
	return (
		<div
			className="custom-table-row"
			style={{ gridTemplateColumns: `50px repeat(${titles.length - 1},2fr)` }}>
			{titles.map((title, index) => {
				return (
					<span
						className="custom-table-header-cell"
						key={index}
						data-bs-toggle="tooltip"
						data-bs-placement="bottom"
						title={title}>
						{title}
					</span>
				);
			})}
		</div>
	);
};

export default TableHeader;
