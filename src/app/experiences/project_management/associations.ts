import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Associations and Volunteering",
    experienceType: common.ExperienceType.Personnal,
    category: ["Project Management", "Humanities"],

    thumbnailUrl: "../images/wallpapers/volunteering.jpg",

    tags: ["Association", "Volunteering", "Meeting", "Insurance", "Project management", "Communication", "Team spirit"],

    abstract: [
        { 
            title : "Amicale INSA", 
            subtitle : "Secretary - Amicale INSA - Toulouse - 2014-2016", 
            description : "For two years, I have been the secretary of the INSA Toulouse students union office, named \"Amicale des Élèves\". I was responsible of all insurances of the office, which needs to insure its members (staff and all students that are registered at the office), its activities (the office manages tens of clubs offering any time of activities and also organises big events such as festivals, concerts, parties, forums, etc.) and its equipement. I was also responsible for writing the meeting minutes each monday evening and publish them. Each member of the team was doing a permanence once a week to welcome the students and offer them to copy, print, or bind documents, inform them about our activities and more globally about INSA, register them, sell them tickets for events, etc. Please find in annex a paper and a poster I made about my volunteering at Amicale INSA."
        },
        { 
            title : "CE INSA", 
            subtitle : "Student member - Toulouse - 2014-2015", 
            description : "For one year, I have been member of the Board of Studies (\"Conseil des Études\"), on which the director and other administration members, sit with some elected professors and students that aims to represent their colleagues. Decisions concerning the training contents and forms are made there. I was also part of the commission for pedagogical innovation (\"C2IP\") that aims to find and test new ways of teaching and studying, for the interest of students and professors."
        },
        { 
            title : "CROUS", 
            subtitle : "Student member - Toulouse - 2014-2015", 
            description : "For two years, I have been student member of the CROUS Toulouse-Midi-Pyrénées' executive board, that makes decisions about how to facilitate the student life (university restaurants, student accomodation, scholarships, etc.)."
        },
    ], 

    competences: [allSkills.findById(54), allSkills.findById(57), allSkills.findById(55)]
,

    conclusion: `
These entities I have been part of during my studies brought me a lot technically and humanely. It fostered my team spirit, made me very
comfortable with meetings and records. I really liked being part of a team that aims to help on the basis of volunteering, because that 
builds a special team atmosphere since everyone is here only because they want to.   
`,

    content: [
    { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/Amicale_paper_analysis.pdf` },
    { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/Amicale_poster_analysis.pdf` }
    ],
};

common.library.experiences.push(Experience)