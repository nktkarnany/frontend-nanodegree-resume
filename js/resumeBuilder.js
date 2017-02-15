/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Ankit Karnany",
    role: "Web Developer",
    contacts: {
        mobile: "+91 9730898275",
        email: "ankitkarnany@gmail.com",
        github: "nktkarnany",
        twitter: "nktkarnany",
        location: "Pune, IN"
    },
    welcomeMessage: "Welcome to my page!!",
    skills: ["HTML", "CSS", "AngularJs", "Java"],
    bioPic: "images/profile.jpg",
    display: function() {
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

        if (bio.skills.length) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill) {
                $("#skills").append(HTMLskills.replace("%data%", skill));
            });
        }
    }
};


bio.display();


var work = {
    jobs: [{
        employer: "Rommel Dongre",
        title: "Full Stack Developer",
        location: "Pune, IN",
        dates: "March'16 - Current",
        description: "I helped design and develop a web application called frrndlease.com. I was responsible for modularising the exisiting javascript code by implementing it in angularjs. I designed and implemented various features like notifications, saving and editing images in s3, redesigning the front end using the bootstrap kit and creating a backend operations single page application interface. For all the features, I was responsible for designing, developing and testing."
    }],
    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
        });
    }
};

work.display();

var projects = {
    projects: [{
            title: "Money Report",
            dates: "September'15",
            description: "An app to keep track of your expenses. It reads all your transactional messages, parses it and calculates the amount debited or credited. A graphical report of expenses can also be viewed with daily, weekly and monthly filter.",
            images: ["images/mr1.jpg", "images/mr2.jpg", "images/mr3.jpg"]
        },
        {
            title: "Delivery Hobbit",
            dates: "January'15",
            description: "An crowdshipping app to connect travellers with senders. It could add requests if there were no travellers and send notifications if a traveller registers.",
            images: ["images/dh1.jpg", "images/dh2.jpg", "images/dh3.jpg"]
        }
    ],
    display: function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
            project.images.forEach(function(img) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", img));
            });
        });
    }
};

projects.display();

var education = {
    schools: [{
            name: "Mount Carmel School",
            location: "Jorhat, Assam, IN",
            degreeDates: "2009",
            url: "",
            majors: ["Class X"]
        },
        {
            name: "VNIT",
            location: "Nagpur, MH, IN",
            degreeDates: "2015",
            url: "http://www.vnit.ac.in/",
            majors: ["BTECH in Chemical Engineering"]
        }
    ],
    onlineCourses: [{
        title: "An Introduction to Interactive Programming in Python",
        school: "Coursera",
        dates: "June'13",
        url: "https://www.coursera.org/maestro/api/certificate/get_certificate?course_id=970391"
    }],
    display: function() {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.url));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.degreeDates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors[0]));
        });

        education.onlineCourses.forEach(function(course) {
            $(".education-entry:last").append(HTMLonlineClasses);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
        });
    }
};

education.display();

$("#mapDiv").append(googleMap);

$("#main").append(internationalizeButton);

var inName = function(name) {

    var arr = name.split(" ");

    return arr[0][0] + arr[0].slice(1).toLowerCase() + " " + arr[1].toUpperCase();
}
