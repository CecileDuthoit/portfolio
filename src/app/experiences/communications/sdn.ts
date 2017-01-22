import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "SDN networks",
    experienceType: common.ExperienceType.Academic,
    category: ["Communications"],

    thumbnailUrl: "../images/wallpapers/network_coverage.jpg",

    tags: ["Software Defined Network", "Networking", "Controller", "Remove intelligence from nodes"],

    abstract: [
        { 
            title : "Introduction to SDN networks", 
            subtitle : "Course at INSA - Toulouse - 2016-2017",
            description : "During this course, we learned how the new SDN (Software Defined Network) technology operates, whate are its advantages, and which place it will take in 5G."
        },
        { 
            title : "SDN Networks", 
            subtitle : "Practical work at INSA - Toulouse - 2016-2017",
            description : "TODO"
        },
 ],

    competences: [allSkills.findById(23)]
,

    conclusion: `
    TODO 
`,

    content: null,
};

common.library.experiences.push(Experience)