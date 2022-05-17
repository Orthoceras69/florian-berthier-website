import "./scss/App.scss";
import Header from "./components/header";
import PlayerCard from "./components/player_card";
import AboutMe from "./components/about_me";
import Skills from "./components/skills";
import Footer from "./components/footer";

function App() {
	return (
		<>
			<Header />
			<PlayerCard />
			<AboutMe />
			<Skills />
			<Footer />
		</>
	);
}

export default App;
