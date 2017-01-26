import * as common from './common'
import { CompetenceType }   from './common';
import { Skills, Skill , CompetenceView }   from '../competences/common';

export class CommunicationSkills {
    public skillsValues : Skill[] ;

    public constructor(private skills : Skills) { 
        this.skillsValues = [skills.findById(20), skills.findById(21), skills.findById(22),
        skills.findById(23), skills.findById(24), skills.findById(25), skills.findById(26),
        skills.findById(27), skills.findById(28), skills.findById(29), skills.findById(201), 
        skills.findById(202)];
    }

    get skillsCom() : Skill[] {
        return this.skillsValues ;
    }

}   

let skills = new Skills();

let comSkills = new CommunicationSkills(skills);

let com : common.CompetenceView = {
    name: "Communication",
    type: CompetenceType.Communication,
    thumbnailUrl: "images/wallpapers/waves.jpeg",
    skills: comSkills.skillsCom,
};

common.libraryCompetences.competenceViews.push(com);