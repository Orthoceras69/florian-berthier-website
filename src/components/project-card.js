import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillCard from "./skill_card";
import PropTypes from "prop-types";

function ProjectCard({ recordData }) {
	console.log(recordData);
	return (
		<div className="columns project">
			<div className="column1_3 project_img">
				<img src={recordData.Image[0].url} />
				<nav className="columns social_nav">
					{recordData.WebLink ? (
						<div>
							<a href={recordData.WebLink} className="webiste">
								<FontAwesomeIcon icon={solid("link")} />
							</a>
						</div>
					) : (
						<></>
					)}
					{recordData.GitHubLink ? (
						<div>
							<a href={recordData.GitHubLink} className="github">
								<FontAwesomeIcon icon={brands("github")} />
							</a>
						</div>
					) : (
						<></>
					)}
				</nav>
			</div>
			<div className="column2_3 project_desc">
				<div className="columns">
					<div>
						<h3>{recordData.ProjectName}</h3>
					</div>
					<div className="status">
						<p>
							Status :{" "}
							<strong
								className={recordData.Status.replace(new RegExp(/[èéêë]/g), "e")
									.replace(new RegExp(/[ ]/g), "_")
									.toLowerCase()}
							>
								{recordData.Status}
							</strong>
						</p>
					</div>
				</div>

				<p>{recordData.Comments}</p>
				<div className="columns technos">
					{recordData.FrontTech.map(function (object, i) {
						return <SkillCard value={object} key={i} />;
					})}
				</div>
				<div className="columns technos">
					{recordData.BackTech.map(function (object, i) {
						return <SkillCard value={object} key={i} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;

ProjectCard.propTypes = {
	recordData: PropTypes.object,
};
