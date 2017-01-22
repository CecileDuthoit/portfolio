import * as common from './common'
import { CompetenceType }   from './common';
import { Skills, Skill , CompetenceView }   from '../competences/common';

export class MiddlewareSkills {
    public skillsValues : Skill[] ;

    public constructor(private skills : Skills) { 
        this.skillsValues = [skills.findById(30), skills.findById(31), skills.findById(32), skills.findById(33), skills.findById(34), skills.findById(35),
        skills.findById(36),skills.findById(37), skills.findById(38), skills.findById(39), skills.findById(301), skills.findById(302), skills.findById(303), 
        skills.findById(304), skills.findById(305)];
    }

    get skillsMid() : Skill[] {
        return this.skillsValues ;
    }
}

let skills = new Skills();

let midSkills = new MiddlewareSkills(skills);

let mid : common.CompetenceView = {
    name: "Middleware and Services",
    type: CompetenceType.IMiddlewareAndServices,
    thumbnailUrl: "../../images/wallpapers/prog.jpg",
    skills: midSkills.skillsMid,
};

common.libraryCompetences.competenceViews.push(mid)