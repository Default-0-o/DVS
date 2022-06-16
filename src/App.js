import React, { useReducer, useEffect, Profiler } from "react";
import Routes from "./pages/routes";
import { Context } from "./context/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/fontawesome/css/all.min.css";
import "./assets/css/customBootstrapRtl.css";
import "./App.css";

function App() {
	const [user, dispatcher] = useReducer(
		(state, update) => ({
			...state,
			...update,
		}),
		{
			credentials: {},
			token: "",
		}
	);

	return (
		<>
			<ToastContainer />
			<Context.Provider value={{ user, dispatcher }}>
				<div className="App">
					<Routes />
				</div>
			</Context.Provider>
		</>
	);
}

export default App;
