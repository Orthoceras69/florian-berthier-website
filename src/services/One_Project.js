import { useEffect, useState } from "react";
import ProjectCard from "../components/project-card";

/* eslint-disable no-undef */
var Airtable = require("airtable");
var base = new Airtable({
	apiKey: process.env.REACT_APP_AIRTABLE_KEY,
}).base("apphmIhdtXaiTR3r1");

const OneProject = () => {
	const [airtbleData, setAirtableData] = useState("");

	useEffect(() => {
		base("Projects")
			.select({
				maxRecords: 1,
				view: "Grid view",
			})
			.firstPage(function (err, records) {
				if (err) {
					console.error(err);
					return;
				}
				var response = records[0].fields;
				setAirtableData(response);
			});
	}, []);

	if (airtbleData) {
		return <ProjectCard recordData={airtbleData} />;
	}
	return (
		<div className="loader">
			<img src="img/loading.gif" />
		</div>
	);
};

export default OneProject;
