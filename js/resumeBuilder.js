//$("#main").append("Doug Conner");

// [string].replace([old], [new])
// var awesomeThoughts = "I am Doug and I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);
//console.log(funThoughts);

var bio = {
	"name" : "Doug Conner",
	"role" : "Web Developer",
	"contact" : {
		"mobile" : "805-440-6737",
		"email" : "dconner@connerbase.com",
		"github" : "https://github.com/dougconner/",
		"location" : "Atascadero, CA"
	},
	"welcomeMsg" : "Hi",
	"skills" : [
		"problem solver", " make it work"
	],
	"picture" : "images/me.jpg"
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", "contact information");
var formattedContactGeneric2 = formattedContactGeneric.replace("%data%", ":");
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills =  HTMLskills.replace("%data%", bio.skills);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedContactGeneric2);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomMsg);
$("#header").append(formattedSkills);

var work = {};
work.position = "engineer";
work.employer = "conner engineering";
work.yearsWorked = "5";
work.city = "Atascadero";

var formattedWorkPosition = HTMLworkTitle.replace("%data%", work["position"]);

$("#main").append(formattedWorkPosition);

var education = {};
education["school"] = "Udacity";
education["yearsAttended"] = "1";
education["city"] = "online";

var formattedSchoolName = HTMLschoolName.replace("%data%", education.school);

$("#main").append(formattedSchoolName);

var education = {
	"schools": [
		{
			"name": "Harvey Mudd College",
			"city": "Claremont, CA, US",
			"degree": "BS",
			"major": "engineering"
		},
		{
			"name": "Udacity",
			"city": "online",
			"degree": "nano-degree",
			"major": "Front-end Web Developer"
		}
	]
}


