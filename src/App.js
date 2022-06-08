import React, { useState } from "react";
import Routes from "./pages/routes";
import { Context } from "./context/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/fontawesome/css/all.min.css";
import "./assets/css/customBootstrapRtl.css";
import "./App.css";

function App() {
	const [accessToken, setAccessToken] = useState(
		localStorage.getItem("accessToken")
	);

	return (
		<>
			<ToastContainer />
			<Context.Provider
				value={{ accessToken: accessToken, setAccessToken: setAccessToken }}>
				<div className="App">
					<Routes />
				</div>
			</Context.Provider>
		</>
	);
}

export default App;
