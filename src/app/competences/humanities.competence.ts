import * as common from './common'
import { CompetenceType }   from './common';
import { Skills, Skill , CompetenceView }   from '../competences/common';

export class HumanitiesSkills {
    public skillsValues : Skill[] ;

    public constructor(private skills : Skills) { 
        this.skillsValues = [];
    }

    get skillsHum() : Skill[] {
        return this.skillsValues ;
    }

}   

let skills = new Skills();

let humanSkills = new HumanitiesSkills(skills);

let hum : common.CompetenceView = {
    name: "Innovation and Humanities",
    type: CompetenceType.HumanitiesAndInnovation,
    thumbnailUrl: "../../images/wallpapers/idea.jpg",
    skills: humanSkills.skillsHum,
};

common.libraryCompetences.competenceViews.push(hum);