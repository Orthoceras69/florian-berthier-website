import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./homepage";
import ProjectPage from "./projectpage";
import ErrorPage from "./errorpage";
import LegalsPage from "./legalspage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<HomePage />} />
				<Route path="projects" element={<ProjectPage />} />
				<Route path="legals" element={<LegalsPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}
