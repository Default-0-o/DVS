import React from "react";

const TableHeader = ({ titles }) => {
	return (
		<div
			className="custom-table-row"
			style={{ gridTemplateColumns: `repeat(${titles.length},1fr)` }}>
			{titles.map((title, index) => {
				return (
					<span className="custom-table-header-cell" key={index}>
						{title}
					</span>
				);
			})}
		</div>
	);
};

export default TableHeader;
