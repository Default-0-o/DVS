import React, { useEffect, useContext } from "react";
import { Context } from "../../../context/context";

const Logout = () => {
	const { dispatcher } = useContext(Context);

	useEffect(() => {
		localStorage.removeItem("accessToken");
		dispatcher({
			token: "",
			credentials: {},
		});
	}, []);

	return <div></div>;
};

export default Logout;
