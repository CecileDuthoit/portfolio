import * as common from './../common'

let entry : common.Entry = {
    name: "Associations and Volunteering",
    experienceType: common.ExperienceType.Personnal,
    category: "Project Management",

    thumbnailUrl: "../images/other/volunteering.jpg",

    tags: ["Association", "Volunteering", "Meeting", "Insurance", "Project management", "Communication", "Team spirit"],

    abstract: 
`
# Amicale INSA
## Secretary - Amicale INSA - Toulouse - 2014-2016
TODO

# CE INSA
## TODO - Toulouse - 2014-2015
TODO

# CROUS
## TODO - Toulouse - 2014-2016
TODO
`,

 competences: []
,

    conclusion: `
This part will present the associations and groups I have been part of during my studies and what it brought me technically and humanely.
`,

    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/Amicale_paper_analysis.pdf`
//        `assets/Amicale_poster_analysis.pdf`
    },
  /*
    {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/Security_process_final_paper.pdf`
    }
    */
};

common.library.entries.push(entry)