import React from "react";
import Select from "../../form/select";

const Pagination = ({ page, onPageChange, size, onSizeChange, items }) => {
	return (
		<div className="row justify-content-end align-items-center">
			<Select
				defaultValue={size}
				onClick={(option) => {
					onPageChange(1);
					onSizeChange(option);
				}}
				options={[
					{ value: 10, label: "10" },
					{ value: 20, label: "20" },
					{ value: 50, label: "50" },
					{ value: 100, label: "100" },
				]}
			/>
			<div>
				<button
					className={`btn btn-white ${page === 1 ? "disabled" : ""}`}
					onClick={() => onPageChange(page - 1)}>
					<i className="fas fa-angle-left"></i>
				</button>
				{page !== 1 && (
					<button
						className="btn btn-white mx-1"
						onClick={() => onPageChange(page - 1)}>
						{page - 1}
					</button>
				)}
				<button className="btn btn-primary">{page}</button>
				{items > size * page && (
					<button
						className="btn btn-white mx-1"
						onClick={() => onPageChange(page + 1)}>
						{page + 1}
					</button>
				)}
				<button
					className={`btn btn-white ${items <= size * page ? "disabled" : ""}`}
					onClick={() => onPageChange(page + 1)}>
					<i className="fas fa-angle-right"></i>
				</button>
			</div>
		</div>
	);
};

export default Pagination;
