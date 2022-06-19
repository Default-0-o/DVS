import React from "react";
import Tooltip from "../../tooltip";

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
				{Object.keys(row).map((cell, index) => {
					return row[cell] ? (
						<span className="custom-table-row-cell" key={index}>
							<Tooltip content={row[cell]} placement="bottom">
								{row[cell] === null ? "-" : row[cell]}
							</Tooltip>
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
