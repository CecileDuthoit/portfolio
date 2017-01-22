import * as common from './../common'

let creativity : common.Course = {
    name: "Creativity and TRIZ Methods",
    year: 2016,
    duration: 20.5,
    icon : "idea",
    color : "pink",
    skillTheme : "Humanities"
};

let english : common.Course = {
    name: "English",
    year: 2016,
    duration: 35,
    icon : "english",
    color : "blue",
    skillTheme : "English & Project"
};

let project : common.Course = {
    name: "Integrative Project",
    year: 2016,
    duration: 37.5,
    icon : "sailing",
    color : "blue",
    skillTheme : "English & Project"
};

let portfolio : common.Course = {
    name: "Portfolio",
    year: 2016,
    duration: 8.25,
    icon : "book",
    color : "blue",
    skillTheme : "English & Project"
};

let innovation : common.Course = {
    name: "Innovation, Acceptability and Business Development",
    year: 2016,
    duration: 20,
    icon : "business",
    color : "pink",
    skillTheme : "Humanities"
};

let team_management : common.Course = {
    name: "Team Management",
    year: 2016,
    duration: 20,
    icon : "team",
    color : "pink",
    skillTheme : "Humanities"
};

let sport : common.Course = {
    name: "APS (Sport)",
    year: 2016,
    duration: 25,
    icon : "montain",
    color : "pink",
    skillTheme : "Humanities"
};

let ppi : common.Course = {
    name: "PPI",
    year: 2016,
    duration: 10,
    icon : "cv",
    color : "pink",
    skillTheme : "Humanities"
};

common.libraryCourses.courses.push(creativity)
common.libraryCourses.courses.push(innovation)
common.libraryCourses.courses.push(team_management)
common.libraryCourses.courses.push(sport)
common.libraryCourses.courses.push(ppi)
common.libraryCourses.courses.push(portfolio)
common.libraryCourses.courses.push(english)
common.libraryCourses.courses.push(project)