// <a href="">Projets</a>

import { useState, useEffect } from "react";

function Header() {
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
				<a href="" className="logo">
					<img src="/img/Logo_Blanc_Nom.png" alt="Logo Florian Berthier" />
				</a>
				<ul className="navbar_links">
					<li className="navbar_item">
						<a href="#home" className="navbar_link">
							Accueil
						</a>
					</li>
					<li className="navbar_item">
						<a href="#about_me" className="navbar_link">
							À propos
						</a>
					</li>
					<li className="navbar_item">
						<a href="#skills" className="navbar_link">
							Compétences
						</a>
					</li>
					<li className="navbar_item">
						<a href="#contact" className="navbar_link">
							Contact
						</a>
					</li>
				</ul>
				<button className="navbar_burger" onClick={handleShowLinks}>
					<span className="burger_bar"></span>
				</button>
			</nav>
		</header>
	);
}

export default Header;
