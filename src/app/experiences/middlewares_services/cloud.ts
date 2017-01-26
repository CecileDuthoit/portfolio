import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Cloud",
    experienceType: common.ExperienceType.Academic,
    category: ["Middleware & Services"],

    thumbnailUrl: "images/wallpapers/cloud-computing.jpg",

    tags: ["Cloud computing", "Distant", "Virtual machines", "OM2M", "Availability", "Elasticity", "Storage", "Processing power"],

    abstract: [
        { 
            title : "Cloud", 
            subtitle : "Course at INSA - Toulouse -2016-2017", 
            description : "In this course, we talked about virtual machines and Cloud in general terms. We also saw the role of OpenStack, a free and open-source software platform for cloud-computing, that is mostly deployed as an infrastructure-as-a-service (IaaS). The report I wrote after our practical work sessions aims to describe and analyze these topics. Please find it in annex."
        },
        { 
           title : "Cloud computing and IaaS implementation", 
           subtitle : "Practical work at INSA - Toulouse - 2016-2017", 
           description : "During these practical work sessions, we manipulated a Cloud infrastructure and implemented an IaaS (Infrastructure as a Service). The infrastructure we used is based on OpenStack and is part of the INTEL-INSA-LAAS lab. The report we made aims to describe and analyze everything we did and understood during these sessions. Please find it in annex."
        },
    ], 

    competences: [allSkills.findById(301), allSkills.findById(302), allSkills.findById(303), 
    allSkills.findById(304), allSkills.findById(35), allSkills.findById(36), allSkills.findById(54)]
,

    conclusion: `
Thanks to this practical work, I could understand in practice the notion of Cloud, that I am daily using for storage and document sharing mainly.
What I get from it is mostly the notions of elasticity and availability, that are inherent in cloud computing, to offer the user a service as
comfortable as they would have with their own server, but regardless for limited storage capacity and processing power or maintenance.
`,

    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/TP_Cloud.pdf` }
    ],
};

common.library.experiences.push(Experience)