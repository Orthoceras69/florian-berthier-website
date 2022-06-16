import { Link } from "react-router-dom";

function Error() {
	return (
		<div id="error">
			<section>
				<div className="columns">
					<div className="column1_3 error_number">
						<h1>404</h1>
					</div>
					<div className="column1_2 error_desc">
						<h2>Euuuuuuhhhhhh...</h2>
						<h3>Je crois qu'on s'est perdu...</h3>
						<p>Repartons sur de bonne bases !</p>
					</div>
				</div>
				<div className="button">
					<Link to="/">Retour à l'accueil</Link>
				</div>
			</section>
		</div>
	);
}

export default Error;
