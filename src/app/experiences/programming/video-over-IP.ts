import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Video over IP",
    experienceType: common.ExperienceType.Professional,
    category: ["Programming"],

    thumbnailUrl: "../images/wallpapers/tv.jpg",

    tags: ["TV broadcast", "Video over IP", "Software Development", "C++", "Standards", "SMPTE", "RFC", "AES", "Meetings", "Communication"],

    abstract: [
        { 
            title : "Implementation of Video over IP software component - Internship", 
            subtitle : "Intership at EVS Toulouse SAS - Toulouse - June to Septembre 2016", 
            description : "From June to September 2016, I did an intership at EVS Toulouse SAS. Born as Opencube in 2003, the company was bought by the group EVS, whom the headquarters are located in Liège, Belgium. During this internship, I implemented a software component which aims to send video over IP for TV broadcast production servers, according to RFC4175. I had to follow the evolution of the standard (which is constantly evolving since it is very new) and adapt my implemented progressively. I coded it in C++ using Qt Creator on a Linux virtual machine running on Windows. To test it, it used several APIs developped by EVS such as video encoders, video generators, etc. I used SSH protocol to run my program on a Linux server because it needed many other components that could not be installed in my machine. The component I developped was succesfully tested during a workshop in Houston, Texas, by a colleague. After I finished this component, I proceeded to several modifications on other components already developped to follow the evolution of standards (RFC, AES, SMPTE). Please find in annex a poster I made about this internship."
        },
    ], 
    
    competences: [allSkills.findById(40), allSkills.findById(41), allSkills.findById(42), allSkills.findById(502)]
,

    conclusion: `
This intershiph was a great experience for many reasons: I thought the subject was very interesting, and I particularly appreciated implementing
a component from scratch on the basis of an RFC. I know that it is the media aspect of the project that made it so interesting. It was an 
good challenge because I had never coded in C++, and this project made me learn and practice this language. It also made me becoming 
familiar with life in a company and industrial project management. The team I worked with used JIRA as an Agile project management software and 
it has been a good initiation to this method of project management. I also became more comfortable with Git, using GitKraken user interface.
`,

    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/EVS_poster.pdf` }
    ],
};

common.library.experiences.push(Experience)