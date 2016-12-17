import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Modulation for Wireless Communications",
    experienceType: common.ExperienceType.Academic,
    category: "Wireless Networks",

    thumbnailUrl: "../images/wallpapers/modulation.jpg",

    tags: ["Telecommuncations", "Phase", "Radio waves", "Signal", "Modulation", "Amplitude", "Electronics", "Filter"],

    abstract: 
`
# Modulation for Communications
## Study at University of Indonesia - Jakarta - 2015
During my semester abroad, I studied telecommunications at University of Indonesia (Jakarta), and studied more precisely the different technics of signal modulation : frequency, amplitude, and phase. I made a presentations to the class with some classmates about phase modulation and phase shift keying modulation.

# AM Radio Receptor
## Project at INSA - Toulouse - 2014-2015
I wrote this document with a classmate after a practical class about radio telecommunications. We gave it the form of a tutorial that teaches how to conveive and implement an AM radio receiver.		
`,

    competences: [allSkills.findById(26), allSkills.findById(63)]
,

    conclusion: `
TODO
`,

    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/PM-PSK_ppt.pdf`
    },
  /*
    {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/Concevoir_son_propre_démodulateur_radio.pdf`
    }
    */
};

common.library.experiences.push(Experience)