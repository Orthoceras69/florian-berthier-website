import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./homepage";
import ProjectPage from "./projectpage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<HomePage />} />
				<Route path="projects" element={<ProjectPage />} />
			</Routes>
		</BrowserRouter>
	);
}
