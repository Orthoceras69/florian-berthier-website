import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function AboutMe() {
	return (
		<div id="about_me">
			<aside>
				<FontAwesomeIcon icon={solid("circle-user")} className="picto" />
				<h2>À Propos</h2>
				<p>
					Je m'appelle Florian BERTHIER, je suis Développeur & Intégrateur Web
					Freelance et également étudiant en alternance à Ynov Campus Lyon en
					Bachelor Informatique en spécialisation Développement Web et Logiciel.
				</p>
				<div className="columns coordonees">
					<div className="column1_2">
						<h3>Mes Coordonnées :</h3>
						<p>
							Téléphone :{" "}
							<a href="tel:+33659097732">
								<i>+33 (0) 6 59 09 77 32</i>
							</a>
						</p>
						<p>
							Email :{" "}
							<a href="mailto:florian.berthier@hotmail.com">
								<i>florian.berthier@hotmail.com</i>
							</a>
						</p>
						<p>
							Discord :{" "}
							<a href="https://www.discordapp.com/users/Orthoceras#6318">
								<i>Orthoceras#6318</i>
							</a>
						</p>
						<p>
							Actuellement : <i>Freelance</i> <i>Alternant</i>
						</p>
					</div>
					<div className="column1_2">
						<h3>Mes Centres d'Intérets :</h3>
						<div className="columns hobbies">
							<div className="column1_4">
								<div className="hobby">
									<FontAwesomeIcon icon={solid("gamepad")} />
									<strong>Jeux Vidéos</strong>
								</div>
							</div>
							<div className="column1_4">
								<div className="hobby">
									<FontAwesomeIcon icon={solid("headphones-simple")} />
									<strong>Musique</strong>
								</div>
							</div>
							<div className="column1_4">
								<div className="hobby">
									<FontAwesomeIcon icon={solid("film")} />
									<strong>Cinéma</strong>
								</div>
							</div>
							<div className="column1_4">
								<div className="hobby">
									<FontAwesomeIcon icon={solid("mug-hot")} />
									<strong>Café</strong>
								</div>
							</div>
							<div className="column1_4">
								<div className="hobby">
									<FontAwesomeIcon icon={solid("medal")} />
									<strong>Sport</strong>
								</div>
							</div>
							<div className="column1_4">
								<div className="hobby">
									<FontAwesomeIcon icon={solid("map-location")} />
									<strong>Voyages</strong>
								</div>
							</div>
							<div className="column1_4">
								<div className="hobby">
									<FontAwesomeIcon icon={solid("book-open")} />
									<strong>Lecture</strong>
								</div>
							</div>
							<div className="column1_4">
								<div className="hobby">
									<FontAwesomeIcon icon={solid("camera-retro")} />
									<strong>Photographie</strong>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="button">
					<a href="/inc/cv_florian_berthier.pdf" download="CV_Florian_Berthier.pdf">
						Télécharger mon CV <FontAwesomeIcon icon={solid("download")} />
					</a>
				</div>
			</aside>
		</div>
	);
}

export default AboutMe;
