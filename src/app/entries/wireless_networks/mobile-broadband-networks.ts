import * as common from './../common'

let entry : common.Entry = {
    name: "Mobile Broadband Networks",
    experienceType: common.ExperienceType.Academic,
    category: "Wireless Networks",

    thumbnailUrl: "../images/other/colored_rain.jpg",

    tags: ["TODO"],

    abstract: 
`
# TOFIND
## Study at University of Indonesia - Jakarta - 2015
Different from narrow band networks, such as LoRa or SigFox analyzed above, mobile broadband networks blabla TODO.
`,

 competences: []
,

    conclusion: `
TODO
`,

    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/LTE_Architecture.pdf`
        //assets/LTE_link_budget_example.pdf
    },
};

common.library.entries.push(entry)