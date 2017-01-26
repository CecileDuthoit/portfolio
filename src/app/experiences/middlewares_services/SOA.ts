import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Service-Oriented Architecture",
    experienceType: common.ExperienceType.Academic,
    category: ["Middleware & Services"],

    thumbnailUrl: "images/wallpapers/web_services.jpg",

    tags: ["SOA", "SOAP", "REST", "Web service", "Orchestration", "PBEL", "Composite application", "WSDL", "JSON", "XML", "XSD"],

    abstract: [
        { 
            title : "SOA", 
            subtitle : "Course at INSA - Toulouse -2016-2017", 
            description : "In this course, we discussed the concept of Service-Oriented Architecture and how to implement it. We talked about WSDL architecture, SOAP protocols and REST requests, how to orchestrate web services using BPEL, and we introduced the tools we were going to use for our practical work sessions (cf. next paragraph)."
        },
        { 
            title : "SOA using OpenESB", 
            subtitle : "Practical work at INSA - Toulouse -2016-2017", 
            description : "During these sessions, we learned how to implement and deploy web services using OpenESB, and orchestrate them using a BPEL module. We created web services using top/bottom and bottom/up techniques and designed XML schemas and WSDL (Web Services Description Language) to describe our web services. Then, we applied what we learned from these sessions in our integrative project (cf. next paragraph)." 
        },
        { 
            title : "Orchestration of REST and SOAP web services", 
            subtitle : "Project at INSA - Toulouse -2016-2017", 
            description : "We did a part of our Integrative Project (cf. next paragraph) using a BPEL orchestration. This part consisted in importing a CSV file that contains some information about regattas and racers (exported from another software our client uses), parsing it (to extract the information we need to enter these regattas and racers in our database) and sending REST request to our server. Our three web services (import, parsing, and application server) were communicating using SOAP and orchestrated by a BPEL module. Unfortunately, the IDE we used, Netbeans, associated to OpenESB, a Java-based open source enterprise service bus, lead us to a huge number of inexplicable errors. Due to the fact that modifications are not taken into account in OpenESB, we had to remake the same project a dozen times, trying to understand what lead us to weird errors, in vain. Finally we presented the theory of our BPEL project instead of a true demo. We also presented the REST request model we implemented on our server to communicate with our application, with our LoRa server, and with an Android application we made. We finally presented all this architecture to our tutors. Please find our presentation in annex."
        },
        { 
            title : "IoTracking: GPS tracking for boat regattas", 
            subtitle : "Project at INSA Toulouse - 2016-217", 
            description : "The integrative projects are specific to the Innovative Smart Systems specialization. They are transdisciplinary projects that encourage students to exercise their skills in different domains. The project we chose was about deploying an ad-hoc LoRa network from scratch and developing a user-friendly web application to allow people to follow the evolution of boat regattas in real time. The server we implemented for this projet communicates with the application, our LoRa server and an Android application using REST requests. Please find our final paper and software design document in annex."
        },
    ], 

    competences: [allSkills.findById(30), allSkills.findById(31), allSkills.findById(32), allSkills.findById(33), allSkills.findById(34), allSkills.findById(54)]
,

    conclusion: `
I learned a lot from these course and projects since I had never manipulated web services before. I learned how to design web services and orchestrate them, and I manipulated communications tools such as SOAP and REST requests (And I discovered that OpenESB is not the best way to create web services...).
`,

    content: [
            { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/SOAP-REST presentation.pdf` },
            { contentType: common.ContentType.PDFDocumentURL, contentValue:`assets/Final_Paper_IoTracking.pdf` },
            { contentType: common.ContentType.PDFDocumentURL, contentValue:`assets/SDD_IoTracking.pdf` },
    ],
};

common.library.experiences.push(Experience)