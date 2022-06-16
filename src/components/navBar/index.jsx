import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-sm navbar-dark bg-primary position-fixed w-100 z-index-1">
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<div className="dropdown">
								<button
									className="text-white-50 text-hover-white fs-4 fw-bolder border-0 bg-transparent nav-link dropdown-toggle"
									type="button"
									id="dropdownMenuButton1"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									Dropdown button
								</button>
								<ul
									className="dropdown-menu"
									aria-labelledby="dropdownMenuButton1">
									<li className=" active">
										<NavLink
											className="dropdown-item fw-bolder-700 fs-4"
											to="/records/transaction">
											Transactions
										</NavLink>
									</li>
									<li className="">
										<NavLink
											className="dropdown-item fw-bolder-700 fs-4"
											to="/records/user">
											Customers
										</NavLink>
									</li>
									<li className="">
										<NavLink
											className="dropdown-item fw-bolder-700 fs-4"
											to="/records/network">
											Networks
										</NavLink>
									</li>
									<li className="">
										<NavLink
											className="dropdown-item fw-bolder-700 fs-4"
											to="/records/address">
											Addresses
										</NavLink>
									</li>
									<li className="">
										<NavLink
											className="dropdown-item fw-bolder-700 fs-4"
											to="/records/asset">
											Assets
										</NavLink>
									</li>
								</ul>
							</div>
						</li>
						<li className="nav-item">
							<NavLink
								to="/deposit"
								className="nav-link text-white-50 text-hover-white fs-4 fw-bolder ms-3">
								Deposit
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/wallet"
								className="nav-link text-white-50 text-hover-white fs-4 fw-bolder ms-3">
								Wallet
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="row justify-content-between align-items-center">
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
