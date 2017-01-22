import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Energy for IoT",
    experienceType: common.ExperienceType.Academic,
    category: ["Communications", "Electronics"],

    thumbnailUrl: "../images/wallpapers/iot.jpg",

    tags: ["TODO"],

    abstract: [     
        { 
            title : "Energy for IoT", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "todo "
        },
        { 
            title : "IoTracking: GPS tracking for boat regattas", 
            subtitle : "Project at INSA Toulouse - 2016-217", 
            description : "The integrative projects are specific to the Innovative Smart Systems specialization. They are transdisciplinary projects that encourage students to exercise their skills in different domains. The project we chose was about deploying an ad-hoc LoRa network from scratch and developing a user-friendly web application to allow people to follow the evolution of boat regattas in real time. This project was inspired by a discussion between two people working at the LAAS (Laboratory for Analysis and Architecture of Systems), one of whom was Thierry Monteil, our professor at INSA in the Electrical and Computer Sciences department (GEI, Génie Electronique et Informatique) and tutor for this project. The other one was passionate about sailing and a member of an association that organizes, among other activities, boat regattas. That club, named CVRL (Club de Voile des Rives de Léran), would like the public to be more involved during those regattas and would like to give them a user-friendly interface to follow the evolution of the races in real-time. The CVRL is located along the banks of Lake Montbel in Ariège, France. Because the lake is quite far from the surrounding cities, there is almost no network coverage at the site, which made it a real challenge. For carrying out this project, we divided our team into three subgroups, depending on the will and the skills of each. Since I had never done web programming in the past, I chose to work on the web application and the server. But even if each member of the team was particularly following one part of the project, we all worked together and we have been careful to always meet and discuss about everything."
        },
    ],

 competences: [allSkills.findById(54)]
,
    conclusion: `
TODO 

`,

    content: null,
};

common.library.experiences.push(Experience)