import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Design and Realization of a Gaz Sensor",
    experienceType: common.ExperienceType.Academic,
    category: "Electronics",

    thumbnailUrl: "../images/wallpapers/hardware.jpg",

    tags: ["TODO"],

    abstract: 
`
# Design and Realization of a Gaz Sensor
## Project at INSA - Toulouse -2016-2017
TODO
`,

   competences: [allSkills.findById(12), allSkills.findById(13)]
,

    conclusion: `
TODO
`,
    
    content: []
      
};

common.library.experiences.push(Experience)