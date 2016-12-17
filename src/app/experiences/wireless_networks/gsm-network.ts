import * as common from './../common'
import { Skills, Skill }   from '../../competences/common';

let allSkills = new Skills();

let Experience : common.Experience = {
    name: "GSM Security",
    experienceType: common.ExperienceType.Academic,
    category: "Wireless Networks",

    // Ici une image jolie :)
    thumbnailUrl: "../images/wallpapers/security.jpg",

    // Ici les tags correspondant à cette entrée.
    // Il peut s'agir de compétences de la matrice de compétence,
    // ou de mots clés.
    tags: ["Wireless Networks", "Mobile Networks", "GSM", "Security", "Interception", "Weaknesses", "Man-in-the-middle", "BTS"],

    // ----------------------------------------------------------
    // Ici, un résumé du travail présenté.
    // On peut y insérer du *markdown*. 
    // ----------------------------------------------------------
    abstract: 
`
# GSM Security Process
## Study at University of Indonesia - Jakarta - 2015
GSM is a second-generation mobile standard standardized by ETSI (European Telecommunications Standards Institute) in the 80s. Since the beginning of its deployment in the early 90, the number of compatible mobile devices has been increasing. In 2011, more than 6 billion mobile connections are identified worldwide. The GSM network has long remained immune to intrusions, especially because of the high cost of interception equipment. However, due to the democratization of technological software and hardware tools, this financial barrier is no longer, making exploitable flaws in the GSM system. Considering the popularity of this medium and the number of vulnerable users, it seemed necessary to focus on the technical interception and ways to implement them. The paper you will find by clicking the link below aims to make a review of the GSM system and network, its objectives, its implementation, its evolutions and its weaknesses, the potential solutions to improve its security system, and presents the operating and role of interception in that context. 

# Passive Interception in GSM Network
## Project at INSA - Toulouse - 2015-2016
We worked for about four months on this project, which contains two parts. The first one is a study of the context, the technical aspects and attacks that have been made already. 
The second one was the technical part that needed us to read a lot of technical documentation and tutorials in order to reproduce a certain type of attack, called "man-in-the-middle". 
We spent a lot of time installing software environement, trying to make some open-source and undocumented software such as Kraken (an open-source software that aims to decrypt encrypted messages)
We managed to intercept and read non encrypted messages by usurping the identity of a BTS and make the mobiles identify theirself to this BTS. Unfortunately, we could not configurate Kraken to decrypt encrypted messages,
but since some people wrote about it, we know it is possible. All this shows how the GSM network can be unsecure and that ill-intentioned people can quite easily attack it.
The results of our work is readable below.
`,

    // ----------------------------------------------------------
    // Ici, c'est la phase d'analyse : les enseignements retirés
    // de l'expérience. 
    // C'est l'argumentaire qui prouve qu'on a acquis certaines 
    // compétences de la matrice.
    // On peut y insérer du *markdown*.
    // ----------------------------------------------------------
    conclusion: `
Writing this papers made me read a lot of IEEE papers about the GSM network, its architecture, its protocols, etc. It made me wonder how to use its weaknesses and empathize with the point of view of pirats to see the potentiel attacks the system could be victim of. 
The technical aspect, by experimenting an attack was extremely interesting for different reasons. 
`,

    competences: [allSkills.findById(20), allSkills.findById(24), allSkills.findById(28), allSkills.findById(29), allSkills.findById(201), allSkills.findById(21), allSkills.findById(60), allSkills.findById(63), allSkills.findById(64)]
    
    /*[
    { name: "Compétence1", type: common.CompetenceType.DataProcessing },
    { name: "Compétence2", type: common.CompetenceType.EnglishAndProject },
    { name: "Compétence3", type: common.CompetenceType.HumanitiesAndInnovation },
    { name: "Compétence4", type: common.CompetenceType.IMiddlewareAndServices },
    { name: "Compétence5", type: common.CompetenceType.SmartDevices },
    { name: "Compétence6", type: common.CompetenceType.Communication }
    ]*/
,

    // ----------------------------------------------------------
    // Ici, Le contenu de l'entrée du portfolio. 
    // Cela peut être un document PDF, markdown ou un simple lien.
    // ----------------------------------------------------------
    content: [
        { contentType: common.ContentType.PDFDocumentURL, contentValue:`assets/Passive_interception_on_GSM_network.pdf` },
        { contentType: common.ContentType.PDFDocumentURL, contentValue:`assets/Security_process_final_paper.pdf` }
    ],
};

common.library.experiences.push(Experience)