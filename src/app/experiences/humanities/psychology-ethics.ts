import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Psychology and Ethics",
    experienceType: common.ExperienceType.Academic,
    category: ["Humanities"],

    thumbnailUrl: "images/wallpapers/ethics.jpg",

    tags: ["Psychology", "Ethics", "Team project", "Decision-marking process", "Conflict management", "Group dynamics", "Work atmosphere"],

    abstract: [
        { 
            title : "Psychology and Ethics ", 
            subtitle : "Course at INSA - Toulouse -2016-2017", 
            description : "In this course, we talked about the importance of paying attention to each member of a team, their own work methods, and their character, in order to build a great and productive working atmosphere. We saw some key principles in psychology, and discussed how to use them to manage a team."
        },
        { 
           title : "Analysis of our project team", 
           subtitle : "Analysis at INSA - Toulouse - 2016-2017", 
           description : "During a course about psychology and ethics, I had to make an analysis about our project team, our decision-making process and group dynamics. The project this anaylsis is based on is named \"IoTracking: GPS tracking for boat regattas\”, and aims to deploy an ad-hoc LoRa network from scratch and develop a user-friendly web application to allow people to follow the evolution of boat regattas in real time. For more info, you can consult the experience named \"Integrative Project\". Please find in annex this analysis."
        },
        { 
           title : "Health Issues in 5G", 
           subtitle : "Presentation at INSA - Toulouse - 2016-2017", 
           description : "As part of this course, one of my classmates and I did a presentation with a free choice of subject (related to 5G). We chose to work on the health impact of 5G, with a specific perspective about the production side of our connected devices. We talked about both working and living conditions of miners and workers in Congo, China, etc. We aimed to organize a debate about how young IoT engineers like us could make a difference in our technological choices, and get opinions and ideas about how to choose between components that were produced with respect for human rights and potentially better components with darker methods of production. Unfortunately, due to time issues, we were not able to organize this debate. Please find in annex this presentation we made."           
        },
    ], 

competences: [allSkills.findById(55)]
,

    conclusion: 
`
Making the analysis made me think about our work methods and about what did worked (or not) in our workflow process on a human level.
With the benefit of hindsight, I do think we managed to be both (quite) efficient in our work methods (especially given our very short 
schedule) and in our human relationships, to create an good atmostphere conducive to work efficiently and pleasantly. Our presentation about ethics in our 
highly connected world made me wonder how our generation could make a difference to make technology evolve without driving a even deepler wedge between "rich"
 and "poor" societies.`,
    
    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/Psycho_ethics_Cecile_Duthoit.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/5G_health_MJELSTAD_DUTHOIT.pdf` },
    ],
      
};

common.library.experiences.push(Experience)