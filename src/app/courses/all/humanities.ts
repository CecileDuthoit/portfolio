import * as common from './../common'

let creativity : common.Course = {
    name: "Creativity and TRIZ Methods",
    year: 2016,
    duration: 25,
};

let english : common.Course = {
    name: "English",
    year: 2016,
    duration: 25,
};

let project : common.Course = {
    name: "Integrative Project",
    year: 2016,
    duration: 38.5,
};

let innovation : common.Course = {
    name: "Innovation, Acceptability and Business Development",
    year: 2016,
    duration: 20,
};

let team_management : common.Course = {
    name: "Team Management",
    year: 2016,
    duration: 20,
};

let sport : common.Course = {
    name: "APS (Sport)",
    year: 2016,
    duration: 25,
};

common.libraryCourses.courses.push(creativity)
common.libraryCourses.courses.push(english)
common.libraryCourses.courses.push(project)
common.libraryCourses.courses.push(innovation)
common.libraryCourses.courses.push(team_management)
common.libraryCourses.courses.push(sport)