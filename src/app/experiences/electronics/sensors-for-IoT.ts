import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Sensors for IoT",
    experienceType: common.ExperienceType.Academic,
    category: ["Electronics", "Communications"],

    thumbnailUrl: "../images/wallpapers/hardware.jpg",

    tags: ["sensors", "Gas sensor", "Arduino", "Shield", "Microcontrollers", "Optical sensors", "AIME", "Clean room", "Eagle", "LoRa chip"],

     abstract: [
        { 
           title : "Smart Devices", 
           subtitle : "Course at INSA - Toulouse - 2016-2017", 
           description : "TODO"
        },
        { 
            title : "Microcontrollers and Open-Source Hardware (MOSH)", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "TODO"
        },
        { 
            title : "Introduction to Sensors", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "TODO"
        },
        { 
            title : "Optical Sensors", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "TODO"
        },
        { 
            title : "Design and Realization of a Gaz Sensor", 
            subtitle : "Project at INSA - Toulouse -2016-2017", 
            description : "During an intershipt at AIME (Aterlier Inter-universitaire de Micro-nano Electronique), we designed and realized in a clean room a nano-particle gas Sensor. We tested it and made a datasheet with a classmate to describe its features and responses to tests. We also designed a prototype of shield on the basis of the Arduino design, using Eagle, a scriptable electronic design automation application. This shield was made to include different components around our gas sensor: an OLED (Organic Light-Emitting Diode) screen, a rotary encoder, a Bluetooth module, and all the electronical components needed to make all these main components work (capacitors, resistors, and an operational amplifier LTC1050CN8)."
        },
        { 
            title : "IoTracking: GPS tracking for boat regattas", 
            subtitle : "Project at INSA Toulouse - 2016-217", 
            description : "The integrative projects are specific to the Innovative Smart Systems specialization. They are transdisciplinary projects that encourage students to exercise their skills in different domains. The project we chose was about deploying an ad-hoc LoRa network from scratch and developing a user-friendly web application to allow people to follow the evolution of boat regattas in real time. We bought LoRa chips from SnootLab (SnootLab Chistera-Pi 1.2 LoRa) and our gateways chips (SODAQ ONE-EU) with their shields (SODAQ ONE Base) from SODAQ."
        },
    ],

   competences: [allSkills.findById(10), allSkills.findById(11), allSkills.findById(12), allSkills.findById(13), allSkills.findById(14), allSkills.findById(15), allSkills.findById(17), allSkills.findById(18), allSkills.findById(54)]
,

    conclusion: 
`
TODO
`,
    
    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/datasheet.pdf` }
    ],
      
};

common.library.experiences.push(Experience)