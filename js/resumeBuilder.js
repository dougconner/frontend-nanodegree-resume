
// work history

var work = {
	"jobs": [
	  {
	  	// "employer" changed to an array for inclusion of url
	    "employer":["Self", "http://www.solarheatengines.com/"],
	    "title":"Technical writing",
	    "location":"Atascadero, CA",
	    "dates":"1997 - present",
	    "description":"Tecnical writing for electronics companies appearing in magazines and websites. Database programming using Microsoft Access. "
	  },
	  {
	    "employer":["Actel (now Microsemi)", "http://www.microsemi.com/"],
	    "title":"Senior Engineer",
	    "location":"Mountain View, CA",
	    "dates":"1996-1997",
	    "description":"Designing FPGAs for communications applications using VHDL for application notes."
	  },
	  {
	    "employer": ["EDN Magazine", "http://www.edn.com/"],
	    "title":"Technical editor",
	    "location":"Newton, MA",
	    "dates":"1987-1996",
	    "description":"Covered programmable logic and EDA tool in application-oriented articles. Performed hands-on projects " +
	    "projects I regularly learned to use a variety of new design tools and software. Some of the projects included " +
	     "implementing digital filters with FPGAs, computer-simulated neural networks, and evaluating schematic capture and " +
	     "pc-board layout software. "
	  },
	  {
	    "employer": ["Teradyne", "http://www.teradyne.com/"],
	    "title":"Electronics Engineer",
	    "location":"Agoura Hills, CA",
	    "dates":"1983-1987",
	    "description":"Responsible for dc-parametric section of chip tester. Designed precision current sources, precision " +
	    "voltage and current measurement system. Also digital design with TTL, CMOS, and ECL logic families.  "
	  },
	  {
	    "employer": ["Northrop (now Northrop-Grumman)", "http://www.northropgrumman.com/"],
	    "title":"Senior Engineer, engineering analysis group",
	    "location":"Newbury Park, CA",
	    "dates":"1979-1983",
	    "description":"Wrote computer programs to evaluate rocket launch dynamics and aerodynamic performance. " +
	    "Worked on softaware requirements document for autonomous unmanned aircraft. Secret clearance.  "
	  },
	  {
	    "employer": ["Conner Construction", ""],
	    "title":"Building Contractor",
	    "location":"Topanga, CA",
	    "dates":"1978-1979",
	    "description":"Worked with my father in his construction business. Obtained my general building contractors license. "
	  },
	  {
	    "employer": ["Northrop (now Northrop-Grumman)", "http://www.northropgrumman.com/"],
	    "title":"Engineer",
	    "location":"Anaheim, CA",
	    "dates":"1976-1978",
	    "description":"Wrote computer programs to simulate the dynamics of gyro-stabilized platforms. Missile-performance analysis. Secret Clearance."
	  }
	],
	"display": function display() {
		// Start work experience - only need to append this once
		$("#workExperience").append(HTMLworkStart);
		for (var job in work.jobs) {
			// format employer and url from employer array
			var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer[0]);
			formattedWorkEmployer = formattedWorkEmployer.replace("#", work.jobs[job].employer[1]);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			// combine employer and title on one line
			var formattedEmployerTitle = formattedWorkEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		}
	}

}

// projects to display my skills and knowledge

var projects = {

	"projects": [
	  {
	    "title":"Project 1",
	    "url": "http://tridev.dougsdiy.com/tridev/project_1/index.html",
	    "dates":"3/1/2015",
	    "description":"Creating a web page using HTML, CSS, and Bootstrap to match a PDF mockup.",
	    "images": [
	    	"images/P1a.jpg"
	    ]
	  },
	  {
	    "title":"Stirling Engine Project",
	    // added "url" property to contain url
	    "url": "http://www.solarheatengines.com/",
	    "dates":"2011-2013",
	    "description":"Hobby blog of my Stirling engine projects",
	    "images": [
	    	"images/dP2a.jpg",
	    	"images/dP2b.jpg"
	    ]
	  },
	  {
	    "title":"Triathlete group website",
	    "url": "http://tritest.dougsdiy.com/",
	    "dates":"2014-2015",
	    "description":"King-of-the-Mountain mileage tracker",
	    "images": [
	    	"images/dP3a.jpg"
	    ]
	  }
	],
	"display": function display() {
		for (var project in projects.projects)  {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace(
				"%data%", projects.projects[project].title);
			// replace "#" with the href
			formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[project].url);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace(
				"%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace(
				"%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectDescription);
			// need to add code to test for number of images and load all
			if (projects.projects[project].images.length > 0) {
				for(image in projects.projects[project].images) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%",
						projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}

	}

}

// contact information

var bio = {
	"name" : "Doug Conner",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "805-440-6737",
		"email" : "dconner@connerbase.com",
		"github" : "https://github.com/dougconner/",
		"twitter" : "dhconner",
		"location" : "Atascadero, CA"
	},
	"welcomeMsg" : "Web developer with engineering and technical writing background",
	"skills" : [
		"HTML",
		"CSS",
		"JavaScript",
		"jQuery",
		"PHP",
		"Python",
		"Technical Writing",
		"Engineering analysis"
	],
	// biopic: url ?
	"picture" : "images/me.jpg",

	"display": function displaySkills() {
		var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
		var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);

		$("#header").append(formattedHeaderName);
		$("#header").append(formattedHeaderRole);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);

		if (bio.skills.length > 0) {
		  $("#header").append(HTMLskillsStart);

		  for(var i = 0; i < bio.skills.length; i++) {
		      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		      $("#skills").append(formattedSkill);
		  }
		}

		// footer info
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		$("#footerContacts").append($("#topContacts").append(formattedMobile));
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);
	}

}


// Education: school and online
var education = {
	"schools": [
		{
			"name": "Harvey Mudd College",
			"location": "Claremont, CA",
			"degree": "BS",
			"major": ["Engineering"],
			"dates": "1976",
			"url": "https://www.hmc.edu/"
		}
	],

	"onlineCourses": [
	  {
	    "title":"Artificial inteligence for robotics",
	    "school":"Udacity",
	    "dates":"2012",
	    "url":"https://www.udacity.com/course/cs373"
	  },
	  {
	    "title":"Intro to HTML and CSS",
	    "school":"Udacity",
	    "dates":"2015",
	    "url":"https://www.udacity.com/course/ud304"
	  },
	  {
	    "title":"JavaScript basics",
	    "school":"Udacity",
	    "dates":"2015",
	    "url":"https://www.udacity.com/course/ud804"
	  },
	  {
	    "title":"How to use Git and GitHub",
	    "school":"Udacity",
	    "dates":"2015",
	    "url":"https://www.udacity.com/course/ud775"
	  },
	  {
	  	"title": "Intro to jQuery",
	  	"school": "Udacity",
	  	"dates": "2015",
	  	"url": "https://www.udacity.com/course/ud245"
	  }
	],
	"display": function display() {
		$("#education").append(HTMLschoolStart);
		for (var school in education.schools) {
			// replace school name and url for link
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

			// school name and degree are on a single line
			var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;

			$(".education-entry:last").append(formattedSchoolTitle);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolDates);
			for (var i = 0; i < education.schools[school].major.length; i++) {
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[i]);
				$(".education-entry:last").append(formattedSchoolMajor);
			}

		}
		$(".education-entry").append(HTMLonlineClasses);
		for (var course in education.onlineCourses) {
			// replace school name and url for link
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[course].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			// No need to display the URL a second time. Need <br>
			var formattedOnlineURL = '<br>';

			// school name and degree are on a single line
			var formattedTitle = formattedOnlineTitle + formattedOnlineSchool;

			$(".education-entry:last").append(formattedTitle);
			$(".education-entry:last").append(formattedOnlineDates);
			// This is just for the <br> url in title link
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
}

// Call the display functions to load the resume data
bio.display();
work.display(); // calls display function in work
projects.display(); // calls display function in projects
education.display();

// TODO put all the following in an object
// Remove triangle images

// To see the map
$("#mapDiv").append(googleMap);

// Initialize the following sections closed
$(".work-entry").attr("style", 'display: none');
$(".project-entry").attr("style", 'display: none');
$(".education-entry").attr("style", 'display: none');

// click on the head to open/close these sections
$("#workExperience").find("h2").click(function() {
	$(".work-entry").toggle();
});

$("#projects").find("h2").click(function() {
	$(".project-entry").toggle();
});

$("#education").find("h2").click(function() {
	$(".education-entry").toggle();
});

$("#mapDiv").find("h2").click(function() {
	$("#map").toggle();
});


