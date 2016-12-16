import * as common from './../common'

let entry : common.Entry = {
    name: "Design of a Shield",
    experienceType: common.ExperienceType.Academic,
    category: "Smart Devices",

    thumbnailUrl: "../images/other/fond_tv.jpg",

    tags: ["TODO"],

    abstract: 
`
# Design of a Shield
## Project at INSA - Toulouse -2016-2017
TODO
`,

 competences: []
,

    conclusion: `
TODO
`,
    
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/EVS_poster.pdf`
    },
};

common.library.entries.push(entry)