import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Big Data",
    experienceType: common.ExperienceType.Academic,
    category: ["Data Processing"],

    thumbnailUrl: "images/wallpapers/big-data.jpg",

    tags: ["Big data", "R", "RStudio", "Information extraction", "Plot data"],

    abstract: [
        { 
            title : "Big Data", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "In this course, we had an introduction to big data, and discussed the need of being able to use the huge quantities of data we get from all sides. We also talked about the importance of manipulating data in the right context and saw how to use R language to make the data \"speak\", which we had the opportunity to apply during our practical work sessions and through the analysis we made by groups."
        },
       { 
           title : "Dataset Analysis", 
           subtitle : "Practical work at INSA - Toulouse - 2016-2017", 
           description : "During these sessions, we analyzed data sets using R on RStudio. We extracted relevant information from these data sets, and displayed them in graphs to answer a problematic for example. Then, I made a short analysis of a free open-source with some classmates. The data set we used lists the movies that contains scenes shot in Paris. We tried to extract all the information we could to answer this problematic: What makes Paris so attractive to movie directors and how to increase this attractiveness? Please find in annex this analysis."
           },
    ],

    competences: [allSkills.findById(43), allSkills.findById(46), allSkills.findById(47), allSkills.findById(48), allSkills.findById(54)]
,

    conclusion: `
    These course and project allowed me to have a first experience with data extraction from large data sets. I had never written scripts in R, and I am glad to have done it now. With the huge quantity of data we get about anything from anyway nowadays, it is a big challenge to be able to know how to deal with all this data and how to make it the most useful (and probably profitable) as possible.
`,

    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/Big_Data_Analysis.pdf` }
    ],
};

common.library.experiences.push(Experience)