import * as common from './../common'

let video_over_ip : common.Course = {
    name: "Implementation of Video over IP software component - Internship",
    year: 2016,
    duration: 4 /*TODO*/,
};


let GSM_interception : common.Course = {
    name: "Passive Interception on GSM network - Project",
    year: 2015,
    duration: 35,
};

let plop : common.Course = {
    name: "Security on GSM Network - Analyze",
    year: 2015,
    duration: 7,
};

let plop2 : common.Course = {
    name: "Design of an AM Radio Receptor - Project",
    year: 2014,
    duration: 11,
};

common.libraryCourses.courses.push(video_over_ip);
common.libraryCourses.courses.push(GSM_interception);
common.libraryCourses.courses.push(plop);
common.libraryCourses.courses.push(plop2);