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

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var nameString = finalName.split(" ");
    nameString[0] = nameString[0].toLowerCase();
    var firstLetter = nameString[0][0].toUpperCase();
    nameString[0] = nameString[0].slice(1);
    nameString[1] = nameString[1].toUpperCase();
    finalName = firstLetter + nameString[0] + " " + nameString[1];


    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));