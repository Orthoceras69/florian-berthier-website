import Header from "./components/header";
import PlayerCard from "./components/player_card";
import AboutMe from "./components/about_me";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Project from "./components/project";

function HomePage() {
	return (
		<>
			<Header />
			<PlayerCard />
			<AboutMe />
			<Skills />
			<Project />
			<Contact />
			<Footer />
		</>
	);
}

export default HomePage;
