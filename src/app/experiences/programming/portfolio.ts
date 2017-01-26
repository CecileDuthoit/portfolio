import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Portfolio",
    experienceType: common.ExperienceType.Academic,
    category: ["Programming", "Humanities"],

    thumbnailUrl: "images/wallpapers/working.jpeg",

    tags: ["Portfolio", "Experiences", "Angular 2", "Typescript", "HTML"],

    abstract: [
        { 
            title : "Building an e-portfolio", 
            subtitle : "Project at INSA Toulouse - 2016-2017", 
            description : "To validate our last year at INSA speciality Innovative Smart Systems, we have to produce a portfolio. This portfolio is supposed to bring together all our experiences that are linked to the competences we need to achieve. I decided to make an e-portfolio because I had never did web programming before and I knew hardly anything about its languages. This portfolio you are currently consulting was made and adapted from a template one of my classmates (and very good friend) did and kindly shared. I am very grateful for everything he showed and teached me about Javascript, mainly during the implementation of our integrative project's web application we did together."
        },
    ], 

    competences: [allSkills.findById(502), allSkills.findById(501), allSkills.findById(55), allSkills.findById(59),
    allSkills.findById(40)]
,

    conclusion: `
Technically, making this e-portfolio made me learn web languages such as Typescript, Javascript, HTML, CSS, and use front-end web frameworks such 
as Bootstrap. It also made me evaluate myself and what I have learned from different types of experiences, this year and previously. 
`,

    content: null,
};

common.library.experiences.push(Experience)