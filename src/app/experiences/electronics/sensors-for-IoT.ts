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
           description : "In this course, we talked about measurement chains, from sensors to reading devices, about the different types of sensors (passive and active), and about smart devices. Smart devices are sensor systems that have a reprogrammable microcontroller or microprocessor circuits providing processing power that allows it to adapt its measure depending on environmental parameters. These smart devices contains two main parts: a measurement chain the microprocessor or microcontroller can affect and a bidirectional interface to both get the measure and control the device. These two aspects make the difference between traditional sensors and smart devices. For this course, my project team and I resolved an exercise about nonlinear resistive sensors. Please find this exercise in annex." 
        },
        { 
            title : "Microcontrollers and Open-Source Hardware (MOSH)", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "In this course, we reviewed microcontrollers architecture, features and use cases, and studied what is Arduino. Arduino is an affordable platform for electronic development that we used during practical work sessions and for our integrative project. We also discussed how to program in Arduino, how to design a PCB (Printed Circuit Board), how to proceed to the routing, how to control the device using an Android application via Bluetooth."
        },
        { 
            title : "Optical Sensors", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "In this course, we mainly talked about laser (which actually stands for Light Amplification by Stimulated Emission of Radiation) and the basic principle of its emission, with some reminders about quantum physics. We reviewed the principle of the light reflection on a target and studied how this technique enables knowledge about this target or problem-solving, such as road sign directional-lightening for instance. We also discussed eye safety, talking about laser power and standards. We finally studied examples of applications, such as aerospace, speed calculation, weapons, and LIDAR (LIght Detection And Ranging) applications."
        },
        { 
            title : "Design and Realization of a Gaz Sensor", 
            subtitle : "Project at INSA - Toulouse -2016-2017", 
            description : "During an intershipt at AIME (Aterlier Inter-universitaire de Micro-nano Electronique), we designed and realized in a clean room a nano-particle gas Sensor. We tested it and made a datasheet with a classmate to describe its features and responses to tests. We also designed a prototype of shield on the basis of the Arduino design, using Eagle, a scriptable electronic design automation application. This shield was made to include different components around our gas sensor: an OLED (Organic Light-Emitting Diode) screen, a rotary encoder, a Bluetooth module, and all the electronical components needed to make all these main components work (capacitors, resistors, and an operational amplifier LTC1050CN8). Please find both schematic and board and our datasheet in annex."
        },
        { 
            title : "IoTracking: GPS tracking for boat regattas", 
            subtitle : "Project at INSA Toulouse - 2016-217", 
            description : "The integrative projects are specific to the Innovative Smart Systems specialization. They are transdisciplinary projects that encourage students to exercise their skills in different domains. The project we chose was about deploying an ad-hoc LoRa network from scratch and developing a user-friendly web application to allow people to follow the evolution of boat regattas in real time. We bought LoRa chips from SnootLab (SnootLab Chistera-Pi 1.2 LoRa) and our gateways chips (SODAQ ONE-EU) with their shields (SODAQ ONE Base) from SODAQ. Unfortunately, we had many problems with our gateways, which compeled us to \"tinker\" our system more than we wanted."
        },
    ],

   competences: [allSkills.findById(10), allSkills.findById(11), allSkills.findById(12), allSkills.findById(13), allSkills.findById(14), allSkills.findById(15), allSkills.findById(17), allSkills.findById(18), allSkills.findById(54)]
,

    conclusion: 
`
All these courses and projects allowed me to manipule Arduino cards and programming and learn about sensors, their types and use cases. Making a sensor from scratch, at AIME, define and test it, write a datasheet, make a shield adapted to the entire system we wanted to build, was extremely interesting. I know that I will probably use Arduino in the future for personal projects and particularly my end-of-course internship, that is why I am very glad to have manipulated them.
`,
    
    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/shield.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/datasheet.pdf` }
    ],
      
};

common.library.experiences.push(Experience)