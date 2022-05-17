import "./scss/App.scss";
import Header from "./components/header";
import PlayerCard from "./components/player_card";
import AboutMe from "./components/about_me";

function App() {
	return (
		<>
			<Header />
			<PlayerCard />
			<AboutMe />
		</>
	);
}

export default App;
