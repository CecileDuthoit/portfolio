import * as common from './../common'

let entry : common.Entry = {
    name: "Android Programming",
    experienceType: common.ExperienceType.Academic,
    category: "Software Programming",

    thumbnailUrl: "../images/other/android.jpg",

    tags: ["Android application", "Driving awareness", "Google Speech Recognizer", "GPS location", "SMS", "Android Studio", "Java"],

    abstract: 
`
# Design and Implementation of a Voice Recognition-based Driving Awareness Detection Application
## Study at University of Indonesia - Jakarta - 2015
TODO
`,

 competences: [
    ]
,

    conclusion: `
TODO
`,

    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/Final_paper_Aware-D.pdf`
    },
};

common.library.entries.push(entry)