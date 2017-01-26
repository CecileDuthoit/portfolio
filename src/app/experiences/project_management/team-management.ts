import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Team Management",
    experienceType: common.ExperienceType.Academic,
    category: ["Project Management"],

    thumbnailUrl: "images/wallpapers/team.jpg",

    tags: ["Decision-marking process", "Meetings", "Team spirit", "Motivation", "Conflict management", "Management strategy"],

    abstract: [
        { 
            title : "Team management", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "In this course, we analyzed stategy of team management and human resources of big companies, what they managed to instaure and which are the disadvantages. Since we could choose which subject we prefered to work on, we chose to centered this course around twon main themes: Conflict management and Motivation. We discussed management strategy, how to motivate a team, how to manage potential conflicts, etc."
        },
        { 
            title : "Amicale INSA", 
            subtitle : "Secretary - Amicale INSA - Toulouse - 2014-2016", 
            description : "For two years, I have been the secretary of the INSA Toulouse students union office, named \"Amicale des Élèves\". I was responsible of all insurances of the office, which needs to insure its members (staff and all students that are registered at the office), its activities (the office manages tens of clubs offering any time of activities and also organises big events such as festivals, concerts, parties, forums, etc.) and its equipement. I was also responsible for writing the meeting minutes each monday evening and publish them. Each member of the team was doing a permanence once a week to welcome the students and offer them to copy, print, or bind documents, inform them about our activities and more globally about INSA, register them, sell them tickets for events, etc. Please find in annex a paper and a poster I made about my volunteering at Amicale INSA."
        },
        { 
            title : "IoTracking: GPS tracking for boat regattas", 
            subtitle : "Project at INSA Toulouse - 2016-217", 
            description : "The integrative projects are specific to the Innovative Smart Systems specialization. They are transdisciplinary projects that encourage students to exercise their skills in different domains. The project we chose was about deploying an ad-hoc LoRa network from scratch and developing a user-friendly web application to allow people to follow the evolution of boat regattas in real time. For carrying out this project, we divided our team into three subgroups, depending on the will and the skills of each. Since I had never done web programming in the past, I chose to work on the web application and the server. But even if each member of the team was particularly following one part of the project, we all worked together and we have been careful to always meet and discuss everything. Please find our final paper and project management plan in annex."
        },
       
    ], 

   competences: [allSkills.findById(53), allSkills.findById(54), allSkills.findById(57), allSkills.findById(56)]
,

    conclusion: 
`
These experiences, from academic ones to personal investments teached me the best behaviours to keep a good team spirit and direction. After these experiences (and many others), I am convinced that one of the keys for a good team is to keep good relationships and good motivation. It remains to be done... 
`,
    
    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/Amicale_paper_analysis.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/Amicale_poster_analysis.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue:`assets/Final_Paper_IoTracking.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue:`assets/PMP_IoTracking.pdf` },
    ],
      
};

common.library.experiences.push(Experience)