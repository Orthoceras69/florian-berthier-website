import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from "react";

export default function Header() {
	const [showLinks, setShowLinks] = useState(false);

	const handleShowLinks = () => {
		setShowLinks(!showLinks);
	};

	useEffect(() => {
		window.addEventListener("scroll", isSticky);
		return () => {
			window.removeEventListener("scroll", isSticky);
		};
	});

	const isSticky = () => {
		const header = document.querySelector(".header-section");
		const scrollTop = window.scrollY;
		scrollTop >= 300
			? header.classList.add("is-sticky")
			: header.classList.remove("is-sticky");
	};

	return (
		<header className="header-section">
			<nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
				<Link to="/#home" className="logo">
					<img src="/img/Logo_Blanc_Nom.png" alt="Logo Florian Berthier" />
				</Link>
				<ul className="navbar_links">
					<li className="navbar_item">
						<Link to="/#home" className="navbar_link">
							Accueil
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="/#about_me" className="navbar_link">
							À propos
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="/#skills" className="navbar_link">
							Compétences
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="/#project" className="navbar_link">
							Projets
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="/#contact" className="navbar_link">
							Contact
						</Link>
					</li>
				</ul>
				<button className="navbar_burger" onClick={handleShowLinks}>
					<span className="burger_bar"></span>
				</button>
			</nav>
		</header>
	);
}
