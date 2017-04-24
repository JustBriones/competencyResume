

var name = "Justin Briones";
 var formattedName = HTMLheaderName.replace("%data%", name);

 var role = "Web Developer";
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);


//bio object, use jquery to prepend to html elements assigned in helper.js
 var bio = {
   "contactInfo" : {
     "mobile" : "909 - 618 - 7596",
     "email" : "JustBriones@gmail.com",
     "github" : "JustBriones",
     "location" : "Rowland Heights"
   },
   "bioPic" : "images/profile.jpg"
 };

//store helper.js elements in a variable which will be prepended to html id's
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
      "yearsWorked" : "1 year",
      "location" : "Irvine"
    }, {
      "position" : "Product Support Specialist",
      "employer" : "PriceSpider",
      "yearsWorked" : "9 months",
      "location" : "Irvine"
    }
  ]
};


function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].position);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
		}

	}

}

displayWork();

//education object using JSON
var education = {
  "schools" : [
      {
        "name" : "California State University, Fullerton",
        "location" : "Fullerton",
        "degree" : "Bachelors",
        "major" : "Decision Science",
        "graduationYear" : 2015
      },
      {
        "name" : "Fullerton College",
        "location" : "Fullerton",
        "major" : "Business Administration"
      }

  ]
};

//projects object using most comfortable method
var projects = {
  "resumeProject" : ""
}
