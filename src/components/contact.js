import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useForm } from "react-hook-form";

function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		// eslint-disable-next-line no-undef
		var Airtable = require("airtable");
		var base = new Airtable({ apiKey: "key6xJSBNip8TJGX7" }).base(
			"apphmIhdtXaiTR3r1"
		);

		base("Contact Form").create(
			[
				{
					fields: {
						Title: data.gender,
						"First Name": data.firstName,
						"Last Name": data.lastName,
						Email: data.email,
						Message: data.message,
						Newsletter: data.newsletter,
						Responsible: {
							id: "usrD6BJDGAZXcOhcC",
							email: "florian.berthier@hotmail.com",
							name: "Florian BERTHIER",
						},
					},
				},
			],
			function (err) {
				if (err) {
					console.error(err);
					return;
				}
			}
		);
	};

	return (
		<div id="contact">
			<section>
				<FontAwesomeIcon icon={solid("circle-user")} className="picto" />
				<h2>Contact</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<select {...register("gender")}>
						<option value="Mr">Mr</option>
						<option value="Mme">Mme</option>
						<option value="Other">Autre</option>
					</select>
					<input
						className="field name"
						type="text"
						placeholder="Nom"
						{...register("lastName", { required: true }, { pattern: /^[A-Za-z]+$/i })}
					/>
					<input
						className="field"
						type="text"
						placeholder="Prénom"
						{...register(
							"firstName",
							{ required: true },
							{ pattern: /^[A-Za-z]+$/i }
						)}
					/>
					<input
						className="field"
						type="email"
						placeholder="Email"
						{...register(
							"email",
							{ required: true },
							{ pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i }
						)}
					/>
					<input
						className="field message"
						type="textarea"
						placeholder="Message"
						{...register("message", { required: true })}
					/>
					<input type="checkbox" {...register("newsletter", {})} />
					<label>S'abonner à la newsletter ?</label>
					{errors.contactRequired && <span>This field is required</span>}
					<input type="submit" />
				</form>
			</section>
		</div>
	);
}

export default Contact;
