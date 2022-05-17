import "./scss/App.scss";
import Header from "./components/header";
import PlayerCard from "./components/player_card";
import AboutMe from "./components/about_me";
import Skills from "./components/skills";

function App() {
	return (
		<>
			<Header />
			<PlayerCard />
			<AboutMe />
			<Skills />
		</>
	);
}

export default App;
