

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
