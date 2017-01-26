import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "Modulation for Wireless Communications",
    experienceType: common.ExperienceType.Academic,
    category: ["Communications"],

    thumbnailUrl: "images/wallpapers/modulation.jpg",

    tags: ["Telecommuncations", "GNURadio", "Software-based radio reception", "Software-based signal processing", "Phase", 
    "Radio waves", "Signal", "Modulation", "Amplitude", "Electronics", "Filter"],

 abstract: [
        { 
            title : "Signal Analog Demodulation with GNU Radio", 
            subtitle : "Practical work at INSA - Toulouse - 2016-2017",
            description : "During these practical work sessions, we used the free open-source software development toolkit GNURadio. This software provides signal processing blocks to implement software-defined radios and signal-processing systems. First, from a record of a radio signal, we used GNURadio to perform an analysis of it and finally demodulate it to make it intelligible for humans. Then, we used an USRP to receive radio in real time. To do so, we needed to be able to change our RLC components to adapt the receiving circuit to the channel we want to listen to. That is why we used an USRP, which embeds an FPGA card inside and enables a software-based radio reception. By changing the frequency on the GNURadio window, we adapted the electronic circuit embedded in the USRP to listen to different frequencies."
        },
        { 
            title : "Modulation for Communications", 
            subtitle : "Study at University of Indonesia - Jakarta - 2015",
            description : "During my semester abroad, I studied telecommunications at University of Indonesia (Jakarta), and studied more precisely the different technics of signal modulation: frequency, amplitude, and phase. I made a presentation to the class with some classmates about phase modulation and phase shift keying modulation."
        },
        { 
            title : "AM Radio Receptor", 
            subtitle : "Project at INSA - Toulouse - 2014-2015",
            description : "This project I made during my third year at INSA aimed to make us design and implement an AM radio receptor. I was particularly interesting because we were completely free and independent, with no paper or protocol to guide us. We investigated by ourselves, using Internet mainly, with also some books about electronics and modulation. This project was my first opportunity to work on a telecommunication project fully independently and I especially appreciated it for this aspect. I wrote the document you will find in annex with a classmate after this project. We gave it the form of a tutorial that teaches how to conveive and implement an AM radio receiver."	
        },
    ],

    competences: [allSkills.findById(26), allSkills.findById(63), allSkills.findById(54), allSkills.findById(502)]
,

    conclusion: `
These experiences teached me a lot about signal modulation, which is a major aspect of telecommunications, especially when we are 
constantly seeking higher bit rates. I also learned about software-based signal processing, and I had the opportunity to use an 
USRP and GNURadio again (I had already used them to intercept GSM communications;for more details, please consult the experience 
named "GSM Security" on the same page).
`,

    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/TP_GNU_Radio.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/PM-PSK_ppt.pdf`},
        { contentType: common.ContentType.PDFDocumentURL, contentValue: `assets/Concevoir_son_propre_démodulateur_radio.pdf` },
    ],
};

common.library.experiences.push(Experience)