import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Communication Protocols for IoT",
    experienceType: common.ExperienceType.Academic,
    category: ["Communications"],

    thumbnailUrl: "../images/wallpapers/iot.jpg",

    tags: ["Wireless protocols", "Physical layer", "MAC layer", "IoT", "ZigBee", "LoRa", "SigFox", "Wi-Fi", "Mobile generations"],

    abstract: [    
        { 
            title : "Physical and MAC layers for IoT", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "In this course, we discussed the special needs of IoT and connected devices concerning PHY and MAC layers. The main issue being the imperative need of low-energy consumption, since we are talking about devices that sometimes aim to be autonomous for up to a decade, the biggest challenge for these layers implementation is to need neither an high processing power nor a constant listening mode. We talked about the different MAC protocols for wireless sensor networks (WSN) and I made a paper about the main protocols that were published until now. Please find this paper in annex. We also discussed the differences between two famous WSN: SigFox, which is a proprietary network made in Toulouse, and LoRa, whose protocol, LoRaWAN, is more and more used and competes with SigFox. One of my classmates and I made a paper, mainly discussing SigFox PHY and MAC layers and other important features, with a comparison with LoRa. We also made a very short presentation to show the conclusion of our paper. Please find this paper and its few slides in annex."
        },
        { 
            title : "Wireless communications for IoT", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "In this course, we discussed digital communications, by reviewing modulation and demodulation, signal processing, and the electronical circuits that enable these processes. We also talked about noise and interferences, and made link budgets to assess the data rate limitations and the signal range of antennas. I resolved an exercise about ZigBee protocol with my project team, in which we calculate the range of a ZigBee signal with and without WiFi interferences. Please find this exercise in annex."
        },
        { 
            title : "IoTracking: GPS tracking for boat regattas", 
            subtitle : "Project at INSA Toulouse - 2016-217", 
            description : "The integrative projects are specific to the Innovative Smart Systems specialization. They are transdisciplinary projects that encourage students to exercise their skills in different domains. The project we chose was about developing a system to allow people to follow the evolution of boat regattas in real time. Because the lake to equip is quite far from the surrounding cities, there is almost no network coverage at the site, which made it a real challenge. That is why we chose to deploy an ad-hoc LoRa network from scratch, after having eliminated the other possibilities that we had thought about: SigFox, due to the low-budget requirement and frequency of emission needed, 2G-3G due to the incomplete network coverage over the lake, and \"home-made\" network due to the shortness of our planning. Please find our final paper in annex."
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
        { contentType: common.ContentType.PDFDocumentURL, contentValue:`assets/Final_Paper_IoTracking.pdf` },
    ],
};

common.library.experiences.push(Experience)