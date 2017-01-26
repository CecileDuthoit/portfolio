import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Innovation and Creativity",
    experienceType: common.ExperienceType.Academic,
    category: ["Humanities", "Project Management"],

    thumbnailUrl: "images/wallpapers/creativity.jpg",

    tags: ["Innovation", "Creativity", "TRIZ methods", "Decision-marking process", "Team spirit", "Social acceptability", "Business plan", "Strategy"],

     abstract: [
        { 
            title : "Creativity ", 
            subtitle : "Course at INSA - Toulouse -2016-2017", 
            description : "During this course, we worked on our integrative project from a less technical point of view, by setting aside our first ideas and by rather doing a lot of brainstorming around our basic requirements. We also did a lot of team building, and it is, moreover, during one of these sessions that we got to know each other in our team and started to be more efficient and motivated."
        },
        { 
           title : "TRIZ methods", 
           subtitle : "Course at INSA - Toulouse - 2016-2017", 
           description : "We had a course about TRIZ methods, which consist in a problem-solving, analysis and forecasting tool. We studied the evolution of different inventions over time, who and why they evolved or not. It was interesting to see that this model can be applied to almost everything we know and use daily."
        },
        { 
            title : "Switch Up Challenge", 
            subtitle : "Innovation support workshop - IoT Valley Toulouse - October 2016", 
            description : "During a weekend, we participated in an innovation support workshop with my project team. This event aims to make people meet up to encourage new concepts and ideas and help them to developp their idea -and for those who would be very motivated, support them to build their start-up. We used this weekend to develop our GPS tracking project, get new ideas from people who did not know our project, and do team building."
        },
        { 
            title : "Adaptability & social acceptability", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "During this course, we worked on the business and social acceptability of our integrative project. We worked on business canevas, Gant diagrams, what makes a project accepted and successful, etc. We presented our IoTracking project with a social and business approach. Please find in annex tis presentation we made."
        },

    ],

   competences: [allSkills.findById(50), allSkills.findById(51), allSkills.findById(52), allSkills.findById(54), 
   allSkills.findById(56), allSkills.findById(57), allSkills.findById(53)]
,

    conclusion: 
`
These courses particularly helped me for our integrative project and the team building we had the opportunity to do during the creativity 
course and the Switch Up Challenge weekend. The Switch Up Challenge was interesting but not adapted to our project progress at that time. 
The breakthrough phase was already finished for a long time because we were very short in time for this project, and this workshop made us 
go back (and thus loose time). It is too bad because the context of this weekend was really interesting but would have been really useful if 
it had taken place one month sooner. The Adaptability & social acceptability course also helped us to add a business view in our project.
`,
    
    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/acceptability_presentation.pdf` },
    ],
};

common.library.experiences.push(Experience)