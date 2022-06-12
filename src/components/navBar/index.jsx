import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-sm navbar-dark bg-primary position-fixed w-100 z-index-1">
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<NavLink
								className="nav-link fw-bolder-700 fs-4"
								to="/records/transaction">
								Transactions
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link fw-bolder-700 fs-4"
								to="/records/user">
								Customers
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link fw-bolder-700 fs-4"
								to="/records/network">
								Networks
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link fw-bolder-700 fs-4"
								to="/records/address">
								Addresses
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link fw-bolder-700 fs-4"
								to="/records/asset">
								Assets
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="row justify-content-between align-items-center">
					<Link
						to="/deposit"
						className="text-white-50 text-hover-white fs-4 fw-bolder ms-3">
						Deposit
					</Link>
					<Link
						to="/logout"
						className="text-white-50 text-hover-white fs-4 fw-bolder ms-12">
						Logout
					</Link>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
