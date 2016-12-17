import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Video over IP",
    experienceType: common.ExperienceType.Professional,
    category: "Software Programming",

    thumbnailUrl: "../images/wallpapers/tv.jpg",

    tags: ["TV broadcast", "Video over IP", "Software Development", "C++", "Standards", "SMPTE", "RFC", "AES", "Meetings", "Communication"],

    abstract: 
`
# Implementation of Video over IP software component - Internship
## Intership at EVS Toulouse SAS - Toulouse - June to Septembre 2016
From June to September 2016, I did an intership at EVS Toulouse SAS. Born as Opencube in 2003, the company was bought by the group EVS, whom the headquarters are located in Liège, Belgium.
`,

    competences: [allSkills.findById(12), allSkills.findById(13)]
,

    conclusion: `
Writing this papers made me read a lot of IEEE papers about the GSM network, its architecture, its protocols, etc. It made me wonder how to use its weaknesses and empathize with the point of view of pirats to see the potentiel attacks the system could be victim of. 
The technical aspect, by experimenting an attack was extremely interesting for different reasons. 
`,

    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/EVS_poster.pdf` }
    ],
};

common.library.experiences.push(Experience)