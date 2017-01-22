import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Communication Protocols for IoT",
    experienceType: common.ExperienceType.Academic,
    category: ["Communications"],

    thumbnailUrl: "../images/wallpapers/iot.jpg",

    tags: ["Wireless protocols", "Physical layer", "MAC layer", "IoT", "ZigBee", "LoRa", "SigFox", "Wi-Fi", "Mobile generations"],

    abstract: [     //Zigbee - lora - sigfox - wifi - 
        { 
            title : "Physical and MAC layers for IoT", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "In this course, we discussed the special needs of IoT and connected devices concerning PHY and MAC layers. The main issue being the imperative need of low-energy consumption, since we are talking about devices that sometimes aim to be autonomous for up to a decade, the biggest challenge for these layers implementation is to need neither an high processing power nor a constant listening mode. We talked about the different MAC protocols for wireless sensor networks (WSN) and I made a paper about the main protocols that were published until now. Please find this paper in annex. We also discussed the differences between two famous WSN: SigFox, which is a proprietary network made in Toulouse, and LoRa, whose protocol, LoRaWAN, is more and more used and competes with SigFox. One of my classmates and I made a paper, mainly discussing SigFox PHY and MAC layers and other important features, with a comparison with LoRa. We also made a very short presentation to show the conclusion of our paper. Please find this paper and its few slides in annex."
        },
        { 
            title : "Wireless communications for IoT", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "Please find this exercise in annex."
        },
        { 
            title : "IoTracking: GPS tracking for boat regattas", 
            subtitle : "Project at INSA Toulouse - 2016-217", 
            description : "The integrative projects are specific to the Innovative Smart Systems specialization. They are transdisciplinary projects that encourage students to exercise their skills in different domains. The project we chose was about deploying an ad-hoc LoRa network from scratch and developing a user-friendly web application to allow people to follow the evolution of boat regattas in real time. This project was inspired by a discussion between two people working at the LAAS (Laboratory for Analysis and Architecture of Systems), one of whom was Thierry Monteil, our professor at INSA in the Electrical and Computer Sciences department (GEI, Génie Electronique et Informatique) and tutor for this project. The other one was passionate about sailing and a member of an association that organizes, among other activities, boat regattas. That club, named CVRL (Club de Voile des Rives de Léran), would like the public to be more involved during those regattas and would like to give them a user-friendly interface to follow the evolution of the races in real-time. The CVRL is located along the banks of Lake Montbel in Ariège, France. Because the lake is quite far from the surrounding cities, there is almost no network coverage at the site, which made it a real challenge. For carrying out this project, we divided our team into three subgroups, depending on the will and the skills of each. Since I had never done web programming in the past, I chose to work on the web application and the server. But even if each member of the team was particularly following one part of the project, we all worked together and we have been careful to always meet and discuss everything."
        },
    ],

 competences: [allSkills.findById(22), allSkills.findById(23), allSkills.findById(20), allSkills.findById(54)]
,
    conclusion: `
TODO 

`,

    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/MAC_protocols_for_WSN.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/SigFox_analysis.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/SigFox_analysis_presentation.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/ZigBee_exercise.pdf` },
    ],
};

common.library.experiences.push(Experience)