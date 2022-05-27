/* eslint-disable no-undef */
function SendAirtable(data) {
	var Airtable = require("airtable");
	var base = new Airtable({
		apiKey: process.env.REACT_APP_AIRTABLE_KEY,
	}).base("apphmIhdtXaiTR3r1");

	base("Contact Form").create(
		{
			Title: data.gender,
			"First Name": data.firstName,
			"Last Name": data.lastName.toUpperCase(),
			Email: data.email,
			Message: data.message,
			Newsletter: data.newsletter,
		},
		function (err) {
			if (err) {
				console.error(err);
				return;
			}
		}
	);
}

export default SendAirtable;
