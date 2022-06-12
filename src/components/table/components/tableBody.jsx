import React from "react";

const TableBody = ({ items }) => {
	return items.map((row, index) => {
		return (
			<div
				className="custom-table-row"
				key={index}
				style={{
					gridTemplateColumns: `repeat(${Object.keys(row).length},1fr)`,
				}}>
				{Object.keys(row).map((cell, index) => {
					return (
						<span className="custom-table-row-cell" key={index}>
							{row[cell]}
						</span>
					);
				})}
			</div>
		);
	});
};

export default TableBody;
