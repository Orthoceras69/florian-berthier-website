function SkillCard(i) {
	if (i.value == "HTML5") {
		return (
			<img
				src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
				alt="HTML5"
			/>
		);
	}
	if (i.value == "CSS3") {
		return (
			<img
				src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
				alt="CSS3"
			/>
		);
	}
	if (i.value == "SCSS") {
		return (
			<img
				src="https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=sass&logoColor=white"
				alt="SCSS"
			/>
		);
	}
	if (i.value == "JAVASCRIPT") {
		return (
			<img
				src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
				alt="JavaScript"
			/>
		);
	}
	if (i.value == "FLUTTER") {
		return (
			<img
				src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white"
				alt="Flutter"
			/>
		);
	}
	if (i.value == "REACT") {
		return (
			<img
				src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
				alt="React"
			/>
		);
	}
	if (i.value == "WORDPRESS") {
		return (
			<img
				src="https://img.shields.io/badge/Wordpress-21759B?style=for-the-badge&logo=wordpress&logoColor=white"
				alt="WordPress"
			/>
		);
	}
	if (i.value == "PHP") {
		return (
			<img
				src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
				alt="PHP"
			/>
		);
	}
	if (i.value == "SYMFONY") {
		return (
			<img
				src="https://img.shields.io/badge/Symfony-000000?style=for-the-badge&logo=Symfony&logoColor=white"
				alt="Symfony"
			/>
		);
	}
	if (i.value == "MYSQL") {
		return (
			<img
				src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"
				alt="MySQL"
			/>
		);
	}
	if (i.value == "NODE.JS") {
		return (
			<img
				src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
				alt="Node.js"
			/>
		);
	}
	if (i.value == "MONGODB") {
		return (
			<img
				src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
				alt="MongoDB"
			/>
		);
	}
	if (i.value == "AIRTABLE") {
		return (
			<img
				src="https://img.shields.io/badge/Airtable-18BFFF?style=for-the-badge&logo=airtable&logoColor=white"
				alt="Airtable"
			/>
		);
	}
	if (i.value == "API") {
		return (
			<img
				src="https://img.shields.io/badge/API-FF3621?style=for-the-badge&logo=databricks&logoColor=white"
				alt="API"
			/>
		);
	}
}

export default SkillCard;
