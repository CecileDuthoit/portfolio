import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Semantic Web",
    experienceType: common.ExperienceType.Academic,
    category: ["Data Processing"],

    thumbnailUrl: "../images/wallpapers/semantic-web.png",

    tags: ["Semantic web", "Data formats", "Ontology", "Resource Description Framework", "Range", "Domain", "Property", "Artificial intelligence", "World Wide Web Consortium"],

    abstract: [
        { 
            title : "Semantic Web", 
            subtitle : "Course at INSA - Toulouse - 2016-2017", 
            description : "In this course, we talked about what is semantic web, its origins, and why the \"old\" web is not sufficient anymore. We talked about RDF (Resource Description Framework), which is a metadata data model adopted by World Wide Web Consortium (W3C). It has come to be used as a general method for conceptual description or modeling of information that is implemented in web resources, and is also used in knowledge management applications."
        },
       { 
           title : "Semantic Web and IoT", 
           subtitle : "Practical work at INSA - Toulouse - 2016-2017", 
           description : "The two sessions we did during this practical work were quite short but were a good initation to semantic web, and were very useful to reallyunderstand the theorical course by practicing. We used Protégé, a free open source ontology editor and a knowledge management system, developed at Stanford University. It provides a graphic user interface to define ontologies and includes deductive classifiers to validate that models are consistent and to infer new information based on the analysis of an ontology. We create an ontology from sets of assertions by implementing types, instances and properties between them. Please find in annex the report we made about these practical work sessions."
           },
    ],

    competences: [allSkills.findById(44), allSkills.findById(45), allSkills.findById(46), allSkills.findById(54)]
,

    conclusion: `
Thanks to this practical work, I understood the purpose and interest of semantic web that was quite unclear for me before. It was quite confusing 
at the beginning because I could not set aside my vision of object oriented programming, which is actually very different from semantic web. 
But I understood the challenge of semantic web when I realized that a machine that aims to learn by itself needs to reason on the basis of basic 
assertions, relations between notions, etc. For example, the fact that the capital of a country is a city is obvious for me, but it can be for 
a machine that has never been teached it. We often use one word to speak about different notions, which is hard to understand for a machine ; 
semantic web enables many things such as researches on a search engine for example, with responses about the different meanings of the researched
word.  

`,

    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/TP_semantic_web.pdf` }
    ],
};

common.library.experiences.push(Experience)