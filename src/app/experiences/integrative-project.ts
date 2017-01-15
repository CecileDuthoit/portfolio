import * as common from './common'
import { Skills, Skill }   from '../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Integrative Project",
    experienceType: common.ExperienceType.Academic,
    category: ["Communications", "Programming", "Electronics", "Project Management"],

    thumbnailUrl: "../images/wallpapers/sailing2.jpg",

    tags: ["LoRa", "Boat regattas", "GPS tracking", "Web programming", "Electronics", "Smart system", "Networking", "LoRaServer", "LoRaOne", 
    "Arduino","Angular2", "MongoDB", "Team management"],

    abstract: 
`
# IoTracking: GPS tracking for boat regattas
## Project at INSA Toulouse - 2016-217
The integrative projects are specific to the Innovative Smart Systems specialization. They are transdisciplinary projects that encourage 
students to exercise their skills in different domains. The project we chose was about deploying an ad-hoc LoRa network from scratch and 
developing a user-friendly web application to allow people to follow the evolution of boat regattas in real time. This project was inspired 
by a discussion between two people working at the LAAS (Laboratory for Analysis and Architecture of Systems), one of whom was Thierry 
Monteil, our professor at INSA in the Electrical and Computer Sciences department (GEI, Génie Electronique et Informatique) and tutor for 
this project. The other one was passionate about sailing and a member of an association that organizes, among other activities, boat regattas. 
That club, named CVRL (Club de Voile des Rives de Léran), would like the public to be more involved during those regattas and would like to 
give them a user-friendly interface to follow the evolution of the races in real-time. The CVRL is located along the banks of Lake Montbel 
in Ariège, France. Because the lake is quite far from the surrounding cities, there is almost no network coverage at the site, which made it 
a real challenge. For carrying out this project, we divided our team into three subgroups, depending on the will and the skills of each. 
Since I had never done web programming in the past, I chose to work on the web application and the server. But even if each member of the 
team was particularly following one part of the project, we all worked together and we have been careful to always meet and discuss about 
everything. 

`,

    conclusion: `
I think this project was the most formative part of my training this year. I learned a lot about web programming, how to make a server and 
request it, how to code with new languages and frameworks I also used to build the portfolio you are currently reading, etc. I also learned 
about LoRa features and how to design an ad-hoc LoRa network from scratch, which will be very useful for my end-of-course internship (I will 
develop a prototype of GPS location system with LoRa). I had the opportunity to work with a really great team and reuse an Scrum Agile project 
management (I had a first experience of it during my intership at EVS last summer). I also made a full project documentation with my team and 
reused the knowledge that I had acquired during my semester abroad for another project.
`,

    competences: [allSkills.findById(10), allSkills.findById(18), allSkills.findById(22), allSkills.findById(23), 
    allSkills.findById(202), allSkills.findById(30), allSkills.findById(31), allSkills.findById(32), 
    allSkills.findById(33), allSkills.findById(34), allSkills.findById(40), allSkills.findById(41), 
    allSkills.findById(42), allSkills.findById(50), allSkills.findById(51), allSkills.findById(52),
    allSkills.findById(53), allSkills.findById(54), allSkills.findById(55), allSkills.findById(56), 
    allSkills.findById(57), allSkills.findById(58), allSkills.findById(502), allSkills.findById(60),
    allSkills.findById(61), allSkills.findById(62), allSkills.findById(63), allSkills.findById(64),
    allSkills.findById(65)]
,
    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue:`assets/Poster_IoTracking.pdf` }
    ],
};

common.library.experiences.push(Experience)