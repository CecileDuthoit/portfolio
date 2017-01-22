import * as common from './../common'

let protocols_iot : common.Course = {
    name: "Protocols for Connected Objects",
    year: 2016,
    duration: 33.25,
    icon : "iot2", 
    color : "red",
    skillTheme : "Communications"
};

let wireless_com_iot : common.Course = {
    name: "Wireless Communications for Connected Objects",
    year: 2016,
    duration: 5,
    icon : "connected",
    color : "red",
    skillTheme : "Communications"
};

let power_iot : common.Course = {
    name: "Powering for Connected Objects",
    year: 2016,
    duration: 7.5,
    icon : "energy",
    color : "red",
    skillTheme : "Communications"
};

let secu_iot : common.Course = {
    name: "Network Security for Connected Objects",
    year: 2016,
    duration: 7.5,
    icon : "secu",
    color : "red",
    skillTheme : "Communications"
}; 

let sdn : common.Course = {
    name: "Emerging Networks (SDN, NGN)",
    year: 2016,
    duration: 10.5,
    icon : "network",
    color : "red",
    skillTheme : "Communications"
};          

common.libraryCourses.courses.push(protocols_iot)
common.libraryCourses.courses.push(wireless_com_iot)
common.libraryCourses.courses.push(power_iot)
common.libraryCourses.courses.push(secu_iot)
common.libraryCourses.courses.push(sdn)