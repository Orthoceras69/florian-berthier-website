import { HashLink as Link } from "react-router-hash-link";
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
					<nav className="footer_nav">
						<ul className="footer_links">
							<li className="footer_item">
								<Link
									to={{ pathname: "/legals/", hash: "#legals" }}
									className="footer_link"
								>
									Mentions Légales
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
