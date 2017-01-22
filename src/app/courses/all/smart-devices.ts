import * as common from './../common'

let mosh : common.Course = {
    name: "Microcontrollers and Open-Source Hardware (MOSH)",
    year: 2016,
    duration: 20,
    icon : "microcontroller",
    color : "marron",
    skillTheme : "Smart Devices"
};  

let optic : common.Course = {
    name: "Optical Sensors",
    year: 2016,
    duration: 7.5,
    icon : "optic",
    color : "marron",
    skillTheme : "Smart Devices"
};  

let intro : common.Course = {
    name: "Introduction to Sensors",
    year: 2016,
    duration: 7.5,
    icon : "hardware",
    color : "marron",
    skillTheme : "Smart Devices"
};  

let prop : common.Course = {
    name: "Intellectual Property in Open-Source Hardware",
    year: 2016,
    duration: 1.25,
    icon : "open",
    color : "marron",
    skillTheme : "Smart Devices"
};  

let gaz_sensor : common.Course = {
    name: "Conception of a Gas Sensor",
    year: 2016,
    duration: 18,
    icon : "labo",
    color : "marron",
    skillTheme : "Smart Devices"
};  

common.libraryCourses.courses.push(mosh)
common.libraryCourses.courses.push(intro)
common.libraryCourses.courses.push(optic)
common.libraryCourses.courses.push(prop)
common.libraryCourses.courses.push(gaz_sensor)

