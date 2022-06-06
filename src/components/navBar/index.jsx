import React from "react";
import { Link, NavLink } from "react-router-dom";

const navBar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-sm navbar-dark bg-primary position-fixed w-100 z-index-1">
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<NavLink
								className="nav-link fw-bolder-700 fs-4"
								to="/records/transactions">
								Transactions
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link fw-bolder-700 fs-4"
								to="/records/customers">
								Customers
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link fw-bolder-700 fs-4"
								to="/records/networks">
								Networks
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link fw-bolder-700 fs-4"
								to="/records/addresses">
								Addresses
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link fw-bolder-700 fs-4"
								to="/records/assets">
								Assets
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default navBar;
