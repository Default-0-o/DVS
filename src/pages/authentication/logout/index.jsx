import React, { useEffect, useContext } from "react";
import { Context } from "../../../context/context";

const Logout = () => {
	const { dispatcher } = useContext(Context);

	useEffect(() => {
		dispatcher({
			token: "",
			credentials: {},
		});
		localStorage.removeItem("token");
	}, []);

	return <div></div>;
};

export default Logout;
