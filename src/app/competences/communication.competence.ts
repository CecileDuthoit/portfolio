import * as common from './common'
import { CompetenceType }   from './common';
import { Skills, Skill , CompetenceView }   from '../competences/common';

export class CommunicationSkills {
    public skillsValues : Skill[] ;

    public constructor(private skills : Skills) { 
        this.skillsValues = [skills.findById(11), skills.findById(12), skills.findById(13)];
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
    thumbnailUrl: "../../images/wallpapers/colored_rain.jpg",
    skills: comSkills.skillsCom,
};

common.libraryCompetences.competenceViews.push(com);