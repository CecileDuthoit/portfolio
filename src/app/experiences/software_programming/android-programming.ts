import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Android Programming",
    experienceType: common.ExperienceType.Academic,
    category: "Software Programming",

    thumbnailUrl: "../images/wallpapers/android_travels.jpg",

    tags: ["Android application", "Driving awareness", "Google Speech Recognizer", "GPS location", "SMS", "Android Studio", "Java"],

    abstract: 
`
# Design and Implementation of a Voice Recognition-based Driving Awareness Detection Application
## Study at University of Indonesia - Jakarta - 2015
TODO
`,

    competences: [allSkills.findById(12), allSkills.findById(13)]
,

    conclusion: `
TODO
`,

    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/Final_paper_Aware-D.pdf` }
    ],
};

common.library.experiences.push(Experience)