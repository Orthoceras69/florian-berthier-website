import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function Skills() {
	return (
		<div id="skills">
			<section>
				<FontAwesomeIcon icon={solid("circle-info")} className="picto" />
				<h2>Mes Compétences</h2>
				<div className="columns">
					<div className="column1_2">
						<h3>Compétences Téchniques :</h3>
						<h4>Technos Front :</h4>
						<div className="columns technical_skills">
							<img
								src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
								alt="HTML5"
							/>
							<img
								src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
								alt="CSS3"
							/>
							<img
								src="https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=sass&logoColor=white"
								alt="SCSS"
							/>
							<img
								src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
								alt="JavaScript"
							/>
							<img
								src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white"
								alt="Flutter"
							/>
							<img
								src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
								alt="React"
							/>
							<img
								src="https://img.shields.io/badge/Wordpress-21759B?style=for-the-badge&logo=wordpress&logoColor=white"
								alt="WordPress"
							/>
						</div>
						<h4>Technos Back :</h4>
						<div className="columns technical_skills">
							<img
								src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
								alt="PHP"
							/>
							<img
								src="https://img.shields.io/badge/Symfony-000000?style=for-the-badge&logo=Symfony&logoColor=white"
								alt="Symfony"
							/>
							<img
								src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"
								alt="MySQL"
							/>
							<img
								src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
								alt="Node.js"
							/>
							<img
								src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
								alt="MongoDB"
							/>
							<img
								src="https://img.shields.io/badge/Airtable-18BFFF?style=for-the-badge&logo=airtable&logoColor=white"
								alt="Airtable"
							/>
						</div>
					</div>
					<div className="column1_2">
						<h3>Compétences Personnels :</h3>
						<div className="columns personal_skills">
							<div className="skill">
								<FontAwesomeIcon icon={solid("diagram-project")} />
								<strong>Gestion de Projet</strong>
							</div>
							<div className="skill">
								<FontAwesomeIcon icon={solid("comments")} />
								<strong>Communication</strong>
							</div>
							<div className="skill">
								<FontAwesomeIcon icon={solid("laptop-file")} />
								<strong>Autonomie</strong>
							</div>
							<div className="skill">
								<FontAwesomeIcon icon={solid("ear-listen")} />
								<strong>Empathie</strong>
							</div>
							<div className="skill">
								<FontAwesomeIcon icon={solid("palette")} />
								<strong>Créativité</strong>
							</div>
							<div className="skill">
								<FontAwesomeIcon icon={solid("eye")} />
								<strong>Curiosité</strong>
							</div>
							<div className="skill">
								<FontAwesomeIcon icon={solid("face-grin-squint")} />
								<strong>Humour</strong>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Skills;
