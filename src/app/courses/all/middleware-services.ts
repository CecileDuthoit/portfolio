import * as common from './../common'

let archi_services : common.Course = {
    name: "Architecture of Services",
    year: 2016,
    duration: 31,
};

let middleware_iot : common.Course = {
    name: "Middleware for Internet of Things",
    year: 2016,
    duration: 13.5,
};

let cloud : common.Course = {
    name: "Adaptability and Cloud",
    year: 2016,
    duration: 12,
};

let soft_engineering : common.Course = {
    name: "Software Engineering",
    year: 2016,
    duration: 6.25,
};

common.libraryCourses.courses.push(archi_services)
common.libraryCourses.courses.push(middleware_iot)
common.libraryCourses.courses.push(cloud)
common.libraryCourses.courses.push(soft_engineering)