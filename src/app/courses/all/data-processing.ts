import * as common from './../common'

let big_data : common.Course = {
    name: "Big Data",
    year: 2016,
    duration: 15,
    icon : "bigdata", 
    color : "green",
    skillTheme : "Data Processing"
};

let sem_web : common.Course = {
    name: "Semantic Web",
    year: 2016,
    duration: 8,
    icon : "sem",
    color : "green",
    skillTheme : "Data Processing"
};    

let soft_engineering : common.Course = {
    name: "Software Engineering",
    year: 2016,
    duration: 6.25,
    icon : "doc",
    color : "green",
    skillTheme : "Data Processing"
};

common.libraryCourses.courses.push(big_data)
common.libraryCourses.courses.push(sem_web)
common.libraryCourses.courses.push(soft_engineering)