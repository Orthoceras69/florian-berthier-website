import SocialNav from "./social_nav";

function Footer() {
	return (
		<footer>
			<div className="columns">
				<div className="column1_4">
					<a href="" className="logo">
						<img src="/img/Logo_Blanc_Nom.png" alt="Logo Florian Berthier" />
					</a>
				</div>
				<div className="column1_2">
					<SocialNav />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
