import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function AboutMe() {
	return (
		<aside>
			<FontAwesomeIcon icon={solid("circle-info")} className="picto" />
			<h2 id="a_propos">À propos</h2>
			<p>
				Je m'appelle Florian BERTHIER, je suis Développeur & Intégrateur Web
				Freelance et également étudiant en alternance à Ynov Campus Lyon en Bachelor
				Informatique en spécialisation Développement Web et Logiciel.
			</p>
			<div className="columns">
				<div className="column1_2">
					<h3>Mes Coordonnées :</h3>
					<p>
						Téléphone : <a href="tel:+33659097732">+33 (0) 6 59 09 77 32</a>
					</p>
					<p>
						Email :{" "}
						<a href="mailto:florian.berthier@hotmail.com">
							florian.berthier@hotmail.com
						</a>
					</p>
					<p>
						Discord :{" "}
						<a href="https://www.discordapp.com/users/Orthoceras#6318">
							Orthoceras#6318
						</a>
					</p>
					<p>Actuellement : Freelance / Alternant</p>
				</div>
				<div className="column1_2">
					<h3>Mes Centres d'Intérets :</h3>
				</div>
			</div>
			<div className="button">
				<a href="">
					Télécharger mon CV <FontAwesomeIcon icon={solid("download")} />
				</a>
			</div>
		</aside>
	);
}

export default AboutMe;
