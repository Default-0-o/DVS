import React from "react";
import Tooltip from "../../tooltip";

const TableHeader = ({ titles }) => {
	return (
		<div
			className="custom-table-row"
			style={{ gridTemplateColumns: `50px repeat(${titles.length - 1},2fr)` }}>
			{titles.map((title, index) => {
				return (
					<Tooltip content={title} placement="bottom">
						<span className="custom-table-header-cell" key={index}>
							{title}
						</span>
					</Tooltip>
				);
			})}
		</div>
	);
};

export default TableHeader;
