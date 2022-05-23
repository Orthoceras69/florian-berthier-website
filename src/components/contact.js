import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import AirtableApi from "../services/API_Airtable";

const schema = yup
	.object()
	.shape({
		firstName: yup.string().required("Prénom Obligatoire"),
		lastName: yup.string().required("Nom Obligatoire"),
		email: yup.string().email().required("Email Obligatoire"),
	})
	.required();

function Contact() {
	const [showContact, setShowContact] = useState(false);

	const handleShowContact = () => {
		setShowContact(!showContact);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		AirtableApi(data);
		handleShowContact();
	};

	console.log(errors);

	return (
		<div id="contact">
			<section>
				<FontAwesomeIcon icon={solid("circle-user")} className="picto" />
				<h2>Contact</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					{showContact ? (
						<>
							<h3>
								<FontAwesomeIcon icon={solid("square-check")} /> Votre message à bien
								été envoyé
							</h3>
							<p>
								Merci pour votre message, je vous répondrai au plus vite{" "}
								<FontAwesomeIcon icon={solid("face-smile-wink")} />
							</p>
						</>
					) : (
						<>
							<select {...register("gender")}>
								<option value="Mr">Mr</option>
								<option value="Mme">Mme</option>
								<option value="Other">Autre</option>
							</select>
							<input
								className="field name"
								type="text"
								placeholder="Nom"
								{...register("lastName")}
							/>
							{errors.lastName ? (
								<p className="form_error">
									<FontAwesomeIcon icon={solid("triangle-exclamation")} />{" "}
									{errors.lastName.message}
								</p>
							) : (
								<></>
							)}
							<input
								className="field"
								type="text"
								placeholder="Prénom"
								{...register("firstName")}
							/>
							{errors.firstName ? (
								<p className="form_error">
									<FontAwesomeIcon icon={solid("triangle-exclamation")} />{" "}
									{errors.firstName.message}
								</p>
							) : (
								<></>
							)}
							<input
								className="field"
								type="email"
								placeholder="Email"
								{...register("email")}
							/>
							{errors.email ? (
								<p className="form_error">
									<FontAwesomeIcon icon={solid("triangle-exclamation")} />{" "}
									{errors.email.message}
								</p>
							) : (
								<></>
							)}
							<textarea
								className="field message"
								type="textarea"
								placeholder="Message"
								{...register("message")}
							/>
							<label className="newsletter">S'abonner à la newsletter ?</label>
							<input type="checkbox" {...register("newsletter")} />
							<div className="button">
								<input type="submit" />
							</div>
						</>
					)}
				</form>
			</section>
		</div>
	);
}

export default Contact;
