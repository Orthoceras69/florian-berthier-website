import background from "../img/website-development.jpg";
import SocialNav from "./social_nav";

function PlayerCard() {
	return (
		<div id="home">
			<main style={{ background: `url(${background})` }}>
				<div className="player_card">
					<div className="profil_picture">
						<img src="/img/Florian_Berthier.jpeg" alt="Florian Berthier" />
					</div>
					<div className="player_info">
						<h1>
							<strong>FLORIAN BERTHIER</strong>
							<br />
							Développeur & Intégrateur Web
						</h1>
						<SocialNav />
					</div>
				</div>
			</main>
		</div>
	);
}

export default PlayerCard;
