import * as common from './common'
import { CompetenceType }   from './common';
import { Skills, Skill , CompetenceView }   from '../competences/common';

export class ProgrammingSkills {
    public skillsValues : Skill[] ;

    public constructor(private skills : Skills) { 
        this.skillsValues = [];
    }

    get skillsProg() : Skill[] {
        return this.skillsValues ;
    }

}   

let skills = new Skills();

let progSkills = new ProgrammingSkills(skills);

let prog : common.CompetenceView = {
    name: "Data Processing",
    type: CompetenceType.DataProcessing,
    thumbnailUrl: "../../images/wallpapers/data.jpg",
    skills: progSkills.skillsProg,
};

common.libraryCompetences.competenceViews.push(prog);