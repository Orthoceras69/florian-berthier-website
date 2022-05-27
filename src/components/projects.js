import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ManyProjects from "../services/Many_Projects";

function Projects() {
	return (
		<div id="projects">
			<section>
				<FontAwesomeIcon icon={solid("circle-check")} className="picto" />
				<h2>Mes Projets</h2>
				<ManyProjects />
			</section>
		</div>
	);
}

export default Projects;
