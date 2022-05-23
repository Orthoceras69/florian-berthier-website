import AirtableKey from "./key/Airtable_key";

function AirtableApi(data) {
	// eslint-disable-next-line no-undef
	var Airtable = require("airtable");
	var base = new Airtable({ apiKey: AirtableKey }).base("apphmIhdtXaiTR3r1");

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

export default AirtableApi;
