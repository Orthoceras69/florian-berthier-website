import { useEffect, useState } from "react";
import ProjectCard from "../components/project-card";

/* eslint-disable no-undef */
var Airtable = require("airtable");
var base = new Airtable({
	apiKey: process.env.REACT_APP_AIRTABLE_KEY,
}).base("apphmIhdtXaiTR3r1");

const ManyProjects = () => {
	const [airtbleData, setAirtableData] = useState("");

	useEffect(() => {
		base("Projects")
			.select({
				view: "Grid view",
			})
			.firstPage(function (err, records) {
				if (err) {
					console.error(err);
					return;
				}
				console.log(records);

				var response = records;

				setAirtableData(response);
			});
	}, []);

	if (airtbleData) {
		return (
			<>
				{airtbleData.map(function (object, i) {
					return <ProjectCard recordData={object.fields} key={i} />;
				})}
			</>
		);
	}
	return (
		<div className="loader">
			<img src="img/loading.gif" />
		</div>
	);
};

export default ManyProjects;
