import * as common from './../common'

let archi_services : common.Course = {
    name: "Architecture of Services",
    year: 2016,
    duration: 31,
    icon : "server",
    color : "yellow",
    skillTheme : "Middlewares & Services"
};

let middleware_iot : common.Course = {
    name: "Middleware for Internet of Things",
    year: 2016,
    duration: 14.75,
    icon : "iot",
    color : "yellow",
    skillTheme : "Middlewares & Services"
};

let cloud : common.Course = {
    name: "Adaptability and Cloud",
    year: 2016,
    duration: 16.25,
    icon : "cloud",
    color : "yellow",
    skillTheme : "Middlewares & Services"
};

common.libraryCourses.courses.push(archi_services)
common.libraryCourses.courses.push(middleware_iot)
common.libraryCourses.courses.push(cloud)
