import * as common from './../common'

let video_over_ip : common.Course = {
    name: "Implementation of Video over IP software component - Internship",
    year: 2016,
    duration: 4 /*TODO*/,
    icon : "tv",
    color : "yellow",
    skillTheme : "Middlewares & Services"
};


let GSM_interception : common.Course = {
    name: "Passive Interception on GSM network - Project",
    year: 2015,
    duration: 35,
    icon : "sim",
    color : "red",
    skillTheme : "Communications"
};

let secu_gsm : common.Course = {
    name: "Security on GSM Network - Analyze",
    year: 2015,
    duration: 7,
    icon : "gsm",
    color : "red",
    skillTheme : "Communications"
};

let am_radio : common.Course = {
    name: "Design of an AM Radio Receptor - Project",
    year: 2014,
    duration: 11,
    icon : "signal",
    color : "red",
    skillTheme : "Communications"
};

common.libraryCourses.courses.push(GSM_interception);
common.libraryCourses.courses.push(secu_gsm);
common.libraryCourses.courses.push(am_radio);
common.libraryCourses.courses.push(video_over_ip);
