import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Android Programming",
    experienceType: common.ExperienceType.Academic,
    category: ["Programming"],

    thumbnailUrl: "images/wallpapers/android_travels.jpg",

    tags: ["Android application", "Driving awareness", "Google Speech Recognizer", "GPS location", "SMS", "Android Studio", "Java"],

    abstract: [
        { 
            title : "Design and Implementation of a Voice Recognition-based Driving Awareness Detection Application", 
            subtitle : "Project at University of Indonesia - Jakarta - 2015", 
            description : "During my semester in Jakarta, I made an Android project with a colleague for our Object Oriented Software Engineering class. Our project, Aware-D, a Voice Recognition-based Driving Awareness Detection Android System which tries an approach of human-computer interaction, was made to help the driver and the families (or relatives) of the driver to ensure the driver’s condition while driving. With this app, the driver is provided questions in form of voice, and the driver answers the questions with voice too. The app then compares the answers of the driver with the pre-allocated answers in the database of the app to determine if the driver is alert or not. The app can then notify the selected person the condition of the driver. The purpose was to help reduce the accidents rate because of loss of awareness problem (from tiredness, alcohol, drugs, etc.). We coded this project in Java with Android Studio using several APIs such as Google Speech Recognizer and produced a quite complete software documentation. Please find in annex our final paper and the entiere project documentation we made for this project."
        },
    ], 

    competences: [allSkills.findById(18), allSkills.findById(40), allSkills.findById(41), allSkills.findById(42),
    allSkills.findById(44), allSkills.findById(43), allSkills.findById(54), allSkills.findById(57),
    allSkills.findById(502), allSkills.findById(60), allSkills.findById(61), allSkills.findById(62),
    allSkills.findById(63), allSkills.findById(64)]
,

    conclusion: `
This project allowed me to have a first experience in Android programming and made me use Google APIs. It made me produce an entire 
software documentation and was a good training of project management, since we used Trello, a web-based project management application,
and met regularly. We submitted our paper to an Indonesian IEEE conference on the advice of our professor but many improvements were needed 
to be accepted. Even if the system was operating, I am aware that our project is not relevant at all since the questions we made the application
ask are not scientifically relevant. To make our system interesting and acceptable, we should have used psychologically proved questions, and 
there were no such paper published at that time. However, this experience teached me a lot about Android programming, software documentation, 
project management and scientifical papers.
`,

    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/Final_paper_Aware-D.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/SRS_Aware_D.pdf` },        
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/SDD_Aware_D.pdf` },  
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/SPMP_Aware_D.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/Unit_Tests_Aware_D.pdf` }
    ],
};

common.library.experiences.push(Experience)