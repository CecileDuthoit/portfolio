import * as common from './common'
import { CompetenceType }   from './common';
import { Skills, Skill , CompetenceView }   from '../competences/common';

export class MiddlewareSkills {
    public skillsValues : Skill[] ;

    public constructor(private skills : Skills) { 
        this.skillsValues = [];
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