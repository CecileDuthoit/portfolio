import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "SDN networks",
    experienceType: common.ExperienceType.Academic,
    category: ["Communications"],

    thumbnailUrl: "../images/wallpapers/network_coverage.jpg",

    tags: ["Software Defined Network", "Networking", "Controller", "Remove intelligence from nodes"],

    abstract: [
        { 
            title : "Introduction to SDN networks", 
            subtitle : "Course at INSA - Toulouse - 2016-2017",
            description : "During this course, we learned how the new SDN (Software Defined Network) technology operates, what are its advantages, and which place it will take in 5G. SDN aims to \"remove\" the intelligence of nodes and assign the control plan to a controller. Data plan and control plan are then totally decoupled, which let more bandwidth for data. In the open-source era, it will also operate a standardisation of the nodes, which should mitigate the problem of changes in commands and languages depending on which proprietary node we use."
        },
        { 
            title : "SDN Networks", 
            subtitle : "Practical work at INSA - Toulouse - 2016-2017",
            description : "The two sessions we spent in the \"network room\" allowed us to pratice SDN. We had one Openflow switch for three students and configured it to build an Open vSwitch (OVS) instance and create a virtual network between our three machines. We configured switching rules, first manually, then using a controller, to route packets depending on their source, destination and type. We also used one of our three machines to implement a gateway which was connected to a hub to communicate with other Openflow switches."
        },
 ],

    competences: [allSkills.findById(23)]
,

    conclusion: `
    I really appreciated this course and especially the practical work sessions. I had never experimented Openflow networking and I think it is much more accessible and convenient since the configuration of each node is not necessary anymore and the controller can be more easily implemented. 
    Because they are centralized and (re)programmable, SDN environments should fit for the Internet of Things, where nodes will be added, deleted and modified very frequently due to their huge number. 
    Since the routers, switches and hubs should be less \"intelligent\", the SDN configuration should also result in lower costs.
`,

    content: null,
};

common.library.experiences.push(Experience)