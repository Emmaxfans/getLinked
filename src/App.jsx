import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing-page/Landing";
// import { useState, useEffect } from "react";
// import Preloader from "./Components/Preloader/Preloader";

function App() {
	return (
		<>
			<Router>
				<Routes>
					{/* {isLoading ? <Preloader /> : <Landing />} */}
					<Route path="/" element={<Landing />} />
					this app
				</Routes>
			</Router>
		</>
	);
}

export default App;
