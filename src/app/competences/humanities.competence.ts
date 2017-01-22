import * as common from './common'
import { CompetenceType }   from './common';
import { Skills, Skill , CompetenceView }   from '../competences/common';

export class HumanitiesSkills {
    public skillsValues : Skill[] ;

    public constructor(private skills : Skills) { 
        this.skillsValues = [skills.findById(50), skills.findById(51), skills.findById(52),
        skills.findById(53), skills.findById(54), skills.findById(55), skills.findById(56),
        skills.findById(57), skills.findById(58), skills.findById(59), skills.findById(501), 
        skills.findById(502)];
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