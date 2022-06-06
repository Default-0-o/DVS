import React from "react";

const TableBody = ({ items }) => {
	return items.map((row, index) => {
		return (
			<div className="custom-table-row" key={index}>
				{row.map((cell, index) => {
					return (
						<span className="custom-table-row-cell" key={index}>
							{cell}
						</span>
					);
				})}
			</div>
		);
	});
};

export default TableBody;
