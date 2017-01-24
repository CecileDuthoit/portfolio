import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Energy for IoT",
    experienceType: common.ExperienceType.Academic,
    category: ["Communications", "Electronics"],

    thumbnailUrl: "../images/wallpapers/iot.jpg",

    tags: ["Energy", "Batteries", "Supercondensators", "Charge and discharge", "Energy recovering", "Photovoltaic", "Thermogenerator", "Applications for IoT"],

    abstract: [     
        { 
            title : "Energy for IoT", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "In this course, we discussed power and energy density, primary (non-rechargeable) and secondary (rechargeable) batteries, superconsidensators, ambiant energy recovery (using photovoltaic panels and thermogenerators). We talked about the different applications related to these technologies and related to sensors and smart devices."
        },
        { 
            title : "IoTracking: GPS tracking for boat regattas", 
            subtitle : "Project at INSA Toulouse - 2016-217", 
            description : "The integrative projects are specific to the Innovative Smart Systems specialization. They are transdisciplinary projects that encourage students to exercise their skills in different domains. The project we chose was about deploying an ad-hoc LoRa network from scratch and developing a user-friendly web application to allow people to follow the evolution of boat regattas in real time. We had to choose which chips we wanted to work with, and also choose batteries to power them. Unfortunately, we chose batteries with three \"pins\" whereas the power input of our chips only had two, which made us \"tinker\" to remove that third one."
        },
    ],

 competences: [allSkills.findById(25), allSkills.findById(27)]
,
    conclusion: `
This course teached me a lot about batteries and how to recover ambiant energy, which is a topic I am very interested in. I learned more about the photovoltaic panels' technical operating, and discovered how to proceed to recover thermal energy and the applications where we already use thermogenerators to recover energy from thermal losses (even if the efficiency is far from being ideal). Since energy is one the best challenges in IoT, energy recovering from surrounding environment is essential, in addition to energy consumption minimizing. More generally, I am convinced that the energy and ecological crisis we are currently living and exacerbating must be solved by both comsuption patterns changes and transition to renewable and \"green\" energy. For these reasons, I am glad to have followed this course.

`,

    content: null,
};

common.library.experiences.push(Experience)