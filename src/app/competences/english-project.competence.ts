import * as common from './common'
import { CompetenceType }   from './common';
import { Skills, Skill , CompetenceView }   from '../competences/common';

export class EnglishSkills {
    public skillsValues : Skill[] ;

    public constructor(private skills : Skills) { 
        this.skillsValues = [skills.findById(60), skills.findById(61), skills.findById(62),
        skills.findById(63), skills.findById(64)];
    }

    get skillsEng() : Skill[] {
        return this.skillsValues ;
    }

}   

let skills = new Skills();

let engSkills = new EnglishSkills(skills);

let eng : common.CompetenceView = {
    name: "English and Project",
    type: CompetenceType.EnglishAndProject,
    thumbnailUrl: "../../images/wallpapers/sailing.jpg",
    skills: engSkills.skillsEng,
};

common.libraryCompetences.competenceViews.push(eng);