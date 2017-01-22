import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Mobile Networks",
    experienceType: common.ExperienceType.Academic,
    category: ["Communications"],

    thumbnailUrl: "../images/wallpapers/mobiles.png",

    tags: ["Mobile networks", "Mobile generations", "Evolution of mobile communications", "2G", "3G", "4G", "5G", "Connected objects", "5GPP", "Smart cities", "Smart Devices", "Health issues", "Ethics in 5G", "IoT"],

    abstract: [
        { 
            title : "Mobile Broadband Networks", 
            subtitle : "Course at University of Indonesia - Jakarta - 2015",
            description : "During my semester in Jakarta, I studied mobile broadband networks and more globally every generation of mobile communications. I particularly worked on 3G and 4G, and wrote about 4G-LTE features and architecture. To see more about 2G, please consult on the same page the experience named \"GSM Security\". Different from narrow band networks, such as LoRa or SigFox analyzed in the experience named \"Communication Protocols for IoT\", mobile broadband networks were first deployed in 1991 as part of the second generation (2G) of mobile phone technology. Higher speeds became available then with 3G and 4G and will become even higher with the next 5G. Too see more about 5G, please consult on the same page the experience named \"5G\". Please find in annex two documents I made about 4G-LTE features and architecture."
        },
        { 
            title : "GSM Security Process", 
            subtitle : "Study at University of Indonesia - Jakarta - 2015", 
            description : "GSM is a second-generation mobile standard standardized by ETSI (European Telecommunications Standards Institute) in the 80s. Since the beginning of its deployment in the early 90, the number of compatible mobile devices has been increasing. In 2011, more than 6 billion mobile connections are identified worldwide. The GSM network has long remained immune to intrusions, especially because of the high cost of interception equipment. However, due to the democratization of technological software and hardware tools, this financial barrier is no longer, making exploitable flaws in the GSM system. Considering the popularity of this medium and the number of vulnerable users, it seemed necessary to focus on the technical interception and ways to implement them. The paper you will find in annex aims to make a review of the GSM system and network, its objectives, its implementation, its evolutions and its weaknesses, the potential solutions to improve its security system, and presents the operating and role of interception in that context.",
        },
        { 
           title : "Passive Interception in GSM Network", 
           subtitle : "Project at INSA - Toulouse - 2015-2016", 
           description : " We worked for about four months on this project, which contains two parts. The first one is a study of the context, the technical aspects and attacks that have been made already. The second one was the technical part that needed us to read a lot of technical documentation and tutorials in order to reproduce a certain type of attack, called \"man-in-the-middle\". We spent a lot of time installing software environement, trying to make some open-source and undocumented software such as Kraken (an open-source software that aims to decrypt encrypted messages). We managed to intercept and read non encrypted messages by usurping the identity of a BTS and make the mobiles identify theirself to this BTS. Unfortunately, we could not configurate Kraken to decrypt encrypted messages, but since some people wrote about it, we know it is possible. All this shows how the GSM network can be unsecure and that ill-intentioned people can quite easily attack it. The results of our work is readable below. Please find in annex the paper we wrote about this project.",
        },
        { 
            title : "From 3G to 5G", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "In this course, we saw the evolution of mobile standards, from 3G to 4G and then the next 5G. We talked about different topics for each of these standards: bandwidth, operators, power, antennas, modulation, data rate, network deployement and even health effects. We made short presentations by divided our class into pairs, with a free choice of subject (related to 5G). My classmate and I did chose to work on the health impact of 5G, with a specific perspective about the production side of our connected devices. We talked about both working and living conditions of miners and workers in Congo, China, etc. We aimed to organize a debate about how young IoT engineers like us could make a difference in our technological choices, and get opinions and ideas about how to choose between components that were produced with respect for human rights and potentially better components with darker methods of production. Unfortunately, due to time issues, we were not able to organize this debate. Please find in annex the presentation we made about Health Issues in 5G."
        },     
    ],

 competences: [allSkills.findById(26), allSkills.findById(20), allSkills.findById(21), allSkills.findById(22), allSkills.findById(23), 
 allSkills.findById(63), allSkills.findById(54)]
,
    conclusion: `
With the huge growth of the mobile market for about twenty years, each new generation of mobile network needs to face new challenges, due to the increasing density of mobile over the world and the and more and more diverse services we need to access. Thanks to the course about Mobile Broadband Networks I followed in Indonesia, and many other classes or project there or in France, I got a good overview of all mobile generations, their features, their weaknesses, and their evolutions. It is essential to understand which technology to use and not to use for IoT and how to prepare the next 5G. The presentation I made about health issues in 5G allowed me to talk about a subject dear to my heart, and for whose I am still looking for the best and more ethical behaviour to have when we worked in a technical domain but we want to fight for human rights.
`,

    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/LTE_Architecture.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/LTE_link_budget_example.pdf`},
        { contentType: common.ContentType.PDFDocumentURL, contentValue:`assets/Security_process_final_paper.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue:`assets/Passive_interception_on_GSM_network.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/5G_health_MJELSTAD_DUTHOIT.pdf` },
    ],
};

common.library.experiences.push(Experience)