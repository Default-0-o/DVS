import React from "react";
import Pagination from "./components/pagination";
import TableBody from "./components/tableBody";
import TableHeader from "./components/tableHeader";
import "./table.css";

const Table = ({ headers, body, tableTitle }) => {
	const [page, setPage] = React.useState(1);
	const [size, setSize] = React.useState(10);

	const start = (page - 1) * size;
	const end = page * size;

	const bodyPaginated = body.slice(start, end);

	return (
		<div className="custom-table ">
			<h1 className="mb-8">{tableTitle}</h1>

			<div className="custom-table-header">
				<TableHeader titles={headers} />
			</div>
			<div className="custom-table-body mb-8">
				<TableBody items={bodyPaginated} />
			</div>
			<div className="custom-table-pagination text-start">
				<Pagination
					page={page}
					onPageChange={setPage}
					items={body.length}
					size={size}
					onSizeChange={setSize}
				/>
			</div>
		</div>
	);
};

export default Table;
