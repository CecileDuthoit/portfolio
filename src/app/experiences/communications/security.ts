import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Security for IoT",
    experienceType: common.ExperienceType.Academic,
    category: ["Communications"],

    thumbnailUrl: "../images/wallpapers/security2.jpg",

    tags: ["Security", "Hardware weaknesses", "Software bugs" , "Data security", "Cache attacks"],

abstract: [
        { 
            title : "Security", 
            subtitle : "Course at INSA - Toulouse - 2016-2017",
            description : "During this course, we discussed different subjects about both software and hardware security. Security in IoT is sometimes left behind, considered as not no primary. In the contrary, it should be absolutely one of the most essential features since we are building an over-connected world, where every single \"innocent\" object we daily use could \"betray\" us and attest to our behaviour and privacy. Connected object are most of the time connected to the Internet, and may be hosted on cloud platforms, which implies potential physical attacks on the distant machines. To discuss all these topics, we were invited to read scientifical papers about security weaknesses and breaches related to IoT and present them to the class. I made a short presentation about three papers from Usenix we read with my project team. We analyzed them and tried to write the major ideas down in order to shortly present them to our entire class. These papers deal with security breaches due to cache memory architecture. Please find in annex this presentation."
        },
 ],

    competences: [allSkills.findById(24), allSkills.findById(28), allSkills.findById(29), allSkills.findById(201), allSkills.findById(202), allSkills.findById(54)]
,

    conclusion: `
Reading these papers and synthetizing them made me learn a lot about cache memories, their architecture, how CPUs access them and the weaknesses these access techniques 
imply. It emphasized the fact that there are still some hardware weaknesses that will be very complicated to solve and against whose it would be very 
difficult to find solutions. These hardware weaknesses are another difficulty added to the need of a secure IoT. More than building very secure software 
IoT systems, we must improve hardware components and their architecture to combat the risks of attacks.
`,

    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/Cache_security.pdf` }
    ],
};

common.library.experiences.push(Experience)