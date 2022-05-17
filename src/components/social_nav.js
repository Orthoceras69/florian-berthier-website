import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

function SocialNav() {
	return (
		<nav className="columns social_nav">
			<div className="column1_8">
				<a
					href="https://www.linkedin.com/in/%E2%98%91-florian-berthier-105ba2179/"
					className="linkedin"
				>
					<FontAwesomeIcon icon={brands("linkedin-in")} />
				</a>
			</div>
			<div className="column1_8">
				<a href="https://www.twitch.tv/orthoceras_" className="twitch">
					<FontAwesomeIcon icon={brands("twitch")} />
				</a>
			</div>
			<div className="column1_8">
				<a href="https://www.instagram.com/flo_brthr/" className="instagram">
					<FontAwesomeIcon icon={brands("instagram")} />
				</a>
			</div>
			<div className="column1_8">
				<a href="https://www.facebook.com/florianbrthr" className="facebook">
					<FontAwesomeIcon icon={brands("facebook-square")} />
				</a>
			</div>
			<div className="column1_8">
				<a
					href="https://www.discordapp.com/users/Orthoceras#6318"
					className="discord"
				>
					<FontAwesomeIcon icon={brands("discord")} />
				</a>
			</div>
			<div className="column1_8">
				<a href="https://github.com/Orthoceras69" className="github">
					<FontAwesomeIcon icon={brands("github")} />
				</a>
			</div>
			<div className="column1_8">
				<a href="mailto:florian.berthier@hotmail.com" className="envelope">
					<FontAwesomeIcon icon={solid("envelope")} />
				</a>
			</div>
			<div className="column1_8">
				<a href="tel:+33659097732" className="phone">
					<FontAwesomeIcon icon={solid("phone")} />
				</a>
			</div>
		</nav>
	);
}

export default SocialNav;
