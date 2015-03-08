//$("#main").append("Doug Conner");

// [string].replace([old], [new])
// var awesomeThoughts = "I am Doug and I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);
//console.log(funThoughts);

var bio = {
	"name" : "Doug Conner",
	"role" : "Web Developer",
	"contact" : "dconner@connerbase.com",
	"picture" : "images/me.jpg",
	"welcomeMsg" : "Hi",
	"skills" : "skills"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contact, "%contact%");
//formattedContact = HTMLcontactGeneric.replace("%contact%", bio.contact);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills =  HTMLskills.replace("%data%", bio.skills);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedContact);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomMsg);
$("#header").append(formattedSkills);

