import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Mobile Broadband Networks",
    experienceType: common.ExperienceType.Academic,
    category: "Wireless Networks",

    thumbnailUrl: "../images/wallpapers/mobiles.png",

    tags: ["TODO"],

    abstract: 
`
# TOFIND
## Study at University of Indonesia - Jakarta - 2015
Different from narrow band networks, such as LoRa or SigFox analyzed above, mobile broadband networks blabla TODO.
`,

 competences: [allSkills.findById(20), allSkills.findById(21), allSkills.findById(22), allSkills.findById(26), allSkills.findById(63)]
    
    /*[
    { name: "Compétence1", type: common.CompetenceType.DataProcessing },
    { name: "Compétence2", type: common.CompetenceType.EnglishAndProject },
    { name: "Compétence3", type: common.CompetenceType.HumanitiesAndInnovation },
    { name: "Compétence4", type: common.CompetenceType.IMiddlewareAndServices },
    { name: "Compétence5", type: common.CompetenceType.SmartDevices },
    { name: "Compétence6", type: common.CompetenceType.Communication }
    ]*/
,

    conclusion: `
TODO
`,

    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/LTE_Architecture.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/LTE_link_budget_example.pdf`}
    ],
};

common.library.experiences.push(Experience)