import React from "react";

const TableBody = ({ items }) => {
	return items.map((row, index) => {
		return (
			<div
				className="custom-table-row"
				key={index}
				style={{
					gridTemplateColumns: ` 50px repeat(${
						Object.keys(row).length - 1
					},2fr)`,
				}}>
				{delete row.metadata}
				{Object.keys(row).map((cell, index) => {
					return row[cell] ? (
						<span
							className="custom-table-row-cell"
							data-bs-toggle="tooltip"
							data-bs-placement="bottom"
							title={row[cell]}>
							{row[cell] === null ? "-" : row[cell]}
						</span>
					) : (
						<span className="custom-table-row-cell" key={index}>
							{row[cell] === null ? "-" : row[cell]}
						</span>
					);
				})}
			</div>
		);
	});
};

export default TableBody;
