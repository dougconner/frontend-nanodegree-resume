
// work history

var work = {
	"jobs": [
	  {
	    "employer":"Self - employed",
	    "title":"Technical writing",
	    "location":"Atascadero, CA",
	    "dates":"1997 - present",
	    "description":"Tecnical writing for electronics companies appearing in magazines and websites. "
	  },
	  {
	    "employer":"Actel",
	    "title":"Senior Engineer",
	    "location":"Mountain View, CA",
	    "dates":"1996-1997",
	    "description":"Designing FPGAs for communications applications using VHDL for application notes. projects. "
	  },
	  {
	    "employer":"EDN Magazine",
	    "title":"Technical editor",
	    "location":"Newton, MA",
	    "dates":"1987-1996",
	    "description":"Covered programmable logic and EDA tool in application-oriented articles. "
	  },
	  {
	    "employer":"Teradyne",
	    "title":"Electronics Engineer",
	    "location":"Agoura Hills, CA",
	    "dates":"1983-1987",
	    "description":"Responsible for dc-parametric section of chip tester. Designed analog and digital circuit. "
	  },
	  {
	    "employer":"Northrop (now Northrop-Grumman)",
	    "title":"Senior Engineer, engineering analysis group",
	    "location":"Newbury Park, CA",
	    "dates":"1979-1983",
	    "description":"Wrote computer programs to evaluate rocket launch dynamics and aerodynamic performance. Secret clearance. "
	  },
	  {
	    "employer":"Conner Construction",
	    "title":"Building Contractor",
	    "location":"Topanga, CA",
	    "dates":"1978-1979",
	    "description":"Helped my father in his construction business. Obtained my general building contractors license. "
	  },
	  {
	    "employer":"Northrop (now Northrop-Grumman)",
	    "title":"Engineer",
	    "location":"Anaheim, CA",
	    "dates":"1976-1978",
	    "description":"Wrote computer programs to simulate the dynamics of gyro-stabilized platforms. Missile-performance analysis. Secret Clearance."
	  }
	],
	"display": function display() {
		for (var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
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
	    "dates":"3/1/2015",
	    "description":"Creating a web page using HTML, CSS, and Bootstrap to match a PDF mockup.",
	    "images": [
	    	"https://placekitten.com/200/200"
	    ]
	  },
	  {
	    "title":"project a",
	    "dates":"3/15/2015",
	    "description":"This is a placeholder for dev",
	    "images": [
	    	"https://placekitten.com/200/201",
	    	"https://placekitten.com/200/200"
	    ]
	  },
	  {
	    "title":"project b",
	    "dates":"3/16/2015",
	    "description":"Another placeholder for dev",
	    "images": [
	    	"https://placekitten.com/200/202"
	    ]
	  }
	],
	"display": function display() {
		for (var i = 0; i < projects.projects.length; i++)  {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace(
				"%data%", projects.projects[i].title);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace(
				"%data%", projects.projects[i].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace(
				"%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedProjectDescription);
			// need to add code to test for number of images and load all
			if (projects.projects[i].images.length > 0) {
				for(image in projects.projects[i].images) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%",
						projects.projects[i].images);
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
		"location" : "Atascadero, CA"
	},
	"welcomeMsg" : "Hi",
	"skills" : [
		"Strong science/engineering background", " problem solver", " make it work"
	],
	"picture" : "images/me.jpg",
	"display": function displaySkills() {
		if (bio.skills.length > 0) {
		  $("#header").append(HTMLskillsStart);

		  for(var i = 0; i < bio.skills.length; i++) {
		      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		      $("#skills").append(formattedSkill);
		  }
		}
	}
}


// Education: school and online
var education = {
	"schools": [
		{
			"name": "Harvey Mudd College",
			"location": "Claremont, CA, US",
			"degree": "BS",
			"major": "Engineering",
			"dates": "1972-1976",
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
	    "dates":"Feb 2015",
	    "url":"https://www.udacity.com/course/ud304"
	  },
	  {
	    "title":"JavaScript basics",
	    "school":"Udacity",
	    "dates":"Mar 2015",
	    "url":"https://www.udacity.com/course/ud804"
	  },
	  {
	    "title":"How to use Git and GitHub",
	    "school":"Udacity",
	    "dates":"Mar 2015",
	    "url":"https://www.udacity.com/course/ud775"
	  }
	]
}

bio.display();

work.display(); // calls display function in work

projects.display(); // calls display function in projects

// to see the map
$("#mapDiv").append(googleMap);
