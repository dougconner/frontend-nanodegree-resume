//$("#main").append("Doug Conner");

// [string].replace([old], [new])
// var awesomeThoughts = "I am Doug and I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);
//console.log(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Doug Conner");
var formattedRole = HTMLheaderRole.replace("%data%", "web Developer");

$("#header").append(formattedName);
$("#header").append(formattedRole);
