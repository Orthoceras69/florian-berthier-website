import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { HashLink as Link } from "react-router-hash-link";
import OneProject from "../services/One_Project";

const Projects = () => {
	return (
		<div id="project">
			<section>
				<FontAwesomeIcon icon={solid("circle-check")} className="picto" />
				<h2>Mes Projets</h2>
				<h3>Dernier projet réalisé :</h3>
				<OneProject />
				<div className="button">
					<Link to="/projects#projects">Voir mes autres projets</Link>
				</div>
			</section>
		</div>
	);
};

export default Projects;
