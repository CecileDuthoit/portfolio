import * as common from './common'
import { CompetenceType }   from './common';
import { Skills, Skill , CompetenceView }   from '../competences/common';

export class ProgrammingSkills {
    public skillsValues : Skill[] ;

    public constructor(private skills : Skills) { 
        this.skillsValues = [skills.findById(40), skills.findById(41), skills.findById(42), skills.findById(43), skills.findById(44), skills.findById(45),
        skills.findById(46),skills.findById(47), skills.findById(48)];
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