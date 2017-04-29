
//bio object, use jquery to prepend to html elements assigned in helper.js
 var bio = {
   "name": "Justin Briones",
 	"role": "Web Developer",
   "contactInfo" : {
     "mobile" : "909 - 618 - 7596",
     "email" : "JustBriones@gmail.com",
     "github" : "JustBriones",
     "location" : "Rowland Heights"
   },
   "bioPic" : "images/profile.jpg"
 };

//store helper.js elements in a variable which will be prepended to html id's
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

 var github = HTMLgithub.replace("%data%", bio.contactInfo.github);
 $("#topContacts").prepend(github);

 var mobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
 $("#topContacts").prepend(mobile);

 var email = HTMLemail.replace("%data%", bio.contactInfo.email);
 $("#topContacts").prepend(email);

 var contactLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
 $("#topContacts").prepend(contactLocation);

 var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
 $("#topContacts").prepend(bioPic);

//work object using JSON to add attributes
var work = {
  "jobs" : [
    {
      "position" : "Client Support and Training Specialist",
      "employer" : "PriceSpider",
      "datesWorked" : "Nov 2016 - present",
      "location" : "Irvine",
      "description" : "After I left Directive Consulting, I knew I wanted to be in tech. It also turned out that PriceSpider needed my help, so I saw it as a golden opportunity to be employed at a tech company while I continue to learn web development. As a Client Support and Training Specialist at PriceSpider, I was tasked with working directly with Fortune 500 clients on technical issues that may arrise post implementation of our solution. This would sometimes include diving into the source code and using developer tools to make sure they have implemented our widget's successfully on their product pages, which typically involves looking into their HTML, CSS and javascript files."
    },
    {
      "position" : "SEO/SEM Manager",
      "employer" : "Directive Consulting",
      "datesWorked" : "July 2016 - Nov 2016",
      "location" : "Irvine",
      "description" : "I decided to leave PriceSpider to explore a different field and further my skills. At Directive Consulting, I was tasked with increasing SEO for our clients via keyword research, technical website audits and website modifications. It was short and sweet, but I decided to leave Directive Consulting after I realized I wanted to pursue a more technical role."
    }, {
      "position" : "Product Support Specialist and Client Support",
      "employer" : "PriceSpider",
      "datesWorked" : "July 2015 - July 2016",
      "location" : "Irvine",
      "description" : "This was my first position while breaking into the tech industry. As a Product Support Specialist, I was tasked with creating regular expressions for multiple retailer websites and auditing our crawler logic. I also utilized software such as Fiddler and PureWPN to investigate and troubleshoot abnormal website behavior. By March 2015, I was promoted to Client Support Specialist."
    }
  ]
};

//work display function
function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].position);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
      var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedDatesWorked);
      $(".work-entry:last").append(formattedWorkDescription);

		}

	}

}

displayWork();

//Projects section
//projects object
var projects = {
	"projects": [
		{
			"title": "Online Resume",
			"datesWorked": "April 2017",
			"description": "Created an online resume to demonstrate ability with HTML, CSS, javascript and jquery."
		}
	]
};

//projects display function
projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			}


		}
	};


projects.display();

//Education Section
//education object using JSON
var education = {
  "schools" : [
      {
        "name" : "California State University, Fullerton",
        "location" : "Fullerton",
        "degree" : "Bachelors",
        "major" : "Decision Science",
        "url" : "https://www.fullerton.edu/",
        "datesAttended" : "August 2013 - May 2015"
      },
      {
        "name" : "Fullerton College",
        "location" : "Fullerton",
        "major" : "Business Administration",
        "url" : "http://www.fullcoll.edu/",
        "datesAttended" : "June 2010 - June 2013"
      }

  ]
};
//education display function
education.display = function() {
	if(education.schools.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
  }
};
    education.display();
