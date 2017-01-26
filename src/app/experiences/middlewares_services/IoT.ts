import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Internet of Things",
    experienceType: common.ExperienceType.Academic,
    category: ["Middleware & Services"],

    thumbnailUrl: "images/wallpapers/IoT.jpg",

    tags: ["IoT", "OM2M", "oneM2M", "Machine to machine", "REST", "Java"],

       abstract: [
        { 
            title : "Internet of Things ", 
            subtitle : "Course at INSA - Toulouse -2016-2017", 
            description : "In this course, we defined what is IoT and what it is used for, with the huge quantity of application domains that exist and still could (will?) emerge with its development. We discussed oneM2M, an IoT standard that aims to lead the societies and researchers to propose and suggest standard specifications. Its purpose is to develop a standard offering technical specifications to fulfill the need for a common M2M (machine-to-machine) Service Layer that will be compatible with many software and hardware components, in order to be able to connect all the connected objects we want in the Internet of Things all around the world. We also discussed OM2M, an Eclipse project initiated by LAAS-CNRS, that implements oneM2M standard and that we used during our practical work sessions."
        },
        { 
           title : "Middleware for Internet of Things", 
           subtitle : "Practical work at INSA - Toulouse - 2016-2017", 
           description : "During these practical work sessions, we used the Eclipse OM2M project, initiated by LAAS-CNRS, which is an open source implementation of oneM2M and SmartM2M standard. OM2M provides a horizontal M2M service platform for developing services independently of the underlying network. We deployed and configure an IoT architecture using OM2M, interacted with connected objects using a REST architecture and integrated a new technology in it, the HUE lamps from Philips, that communicate with Zigbee to a HUE Bridge and onwards to a router. Please find in annex the report my classmate and I made about these sessions."
        },
    ], 

    competences: [allSkills.findById(35), allSkills.findById(36), allSkills.findById(37), 
    allSkills.findById(38), allSkills.findById(39), allSkills.findById(54)]
,

    conclusion: 
`
The course I follwed about IoT and then these practical work sessions allowed me to manipulate an IoT architecture, and made me familiar with OM2M, 
and more globally with the oneM2M standard.
I understood its architecture and the role of each entity (the IN-CSE that receives the requests, the MN-CSE that is an interface with the objects, 
and its database). I also became more comfortable with REST requests, using REST clients such as Postman or using Apache HTTPClient API for Java, 
which has been particularly useful for other projects such as our integrative project for example.
`,

    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/TP_IoT_MJELSTAD_DUTHOIT.pdf` }
    ],
};

common.library.experiences.push(Experience)