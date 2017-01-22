import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Software Engineering",
    experienceType: common.ExperienceType.Academic,
    category: ["Project Management"],

    thumbnailUrl: "../images/wallpapers/SE.jpg",

    tags: ["Project management", "Software documentation", "Software Requirement Specification", "Software Design Document", "Project Management Plan", "Agile", "Scrum"],

    abstract: [
        { 
            title : "Software Engineering", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "In this course, we studied how to implement relevant and exhaustive unit tests, and how to plan and document a project. We talked about Agile time management methods (Scrum in particular) and how to write a solid documentation for project managamenet (PMP: Project Management Plan), requirements (SRS: Software Requirement Specification) and design (SDD: Software Design Document)."
        },
        { 
            title : "IoTracking: GPS tracking for boat regattas", 
            subtitle : "Project at INSA Toulouse - 2016-217", 
            description : "The integrative projects are specific to the Innovative Smart Systems specialization. They are transdisciplinary projects that encourage students to exercise their skills in different domains. The project we chose was about deploying an ad-hoc LoRa network from scratch and developing a user-friendly web application to allow people to follow the evolution of boat regattas in real time. For this project, we tried to make a complete documentation with PMP, SRS and SDD, and we used Scrum methods with weekly to daily meetings to organize our planning. Please find in annex the SRS, PMP, and SDD my group and I wrote for this project."
        },
        { 
            title : "Design and Implementation of a Voice Recognition-based Driving Awareness Detection Application", 
            subtitle : "Project at University of Indonesia - Jakarta - 2015", 
            description : "During my semester in Jakarta, I made an Android project with a colleague for our Object Oriented Software Engineering class. Our project, Aware-D, a Voice Recognition-based Driving Awareness Detection Android System which tries an approach of human-computer interaction, was made to help the driver and the families (or relatives) of the driver to ensure the driver’s condition while driving. We wrote a complete project documentation including SRS, PMP, SDD and unit tests, and adopted planning methods like Agile with (at least) weekly meetings. Please find in annex the SRS, PMP, SDD, and unit test documentation my classmate and I wrote for this project."
        },
        { 
            title : "Implementation of Video over IP software component - Internship", 
            subtitle : "Intership at EVS Toulouse SAS - Toulouse - June to Septembre 2016", 
            description : "From June to September 2016, I did an intership at EVS Toulouse SAS. Born as Opencube in 2003, the company was bought by the group EVS, whom the headquarters are located in Liège, Belgium. During this internship, I implemented a software component which aims to send video over IP for TV broadcast production servers, according to RFC4175. The team I was attached to used Agile methods and particularly JIRA, a project management software that provides bug tracking, issue tracking, and project management functions. I also had weekly meetings with our project manager, and daily ones with a colleague I was working with."
        },
       
    ], 

   competences: [allSkills.findById(58), allSkills.findById(60), allSkills.findById(61), allSkills.findById(40), allSkills.findById(41), allSkills.findById(42), allSkills.findById(43)]
,

    conclusion: 
`
Through these experiences, I learned a lot about software documentation and project management. The different SRS, PMP, SDD and test documentation I made for these projects
allowed me to understand and experiment the different phases in software development, their usefulness to keep the "right direction" of the project when working with a team, and 
how to apply methodologies of project. 
`,
    
    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/SRS_Aware_D.pdf` },        
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/SDD_Aware_D.pdf` },  
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/SPMP_Aware_D.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/Unit_Tests_Aware_D.pdf` }
    ]
      
};

common.library.experiences.push(Experience)