import * as common from './common'
import { CompetenceType }   from './common';
import { Skills, Skill , CompetenceView }   from '../competences/common';

export class SDSkills {
    public skillsValues : Skill[] ;

    public constructor(private skills : Skills) { 
        this.skillsValues = [skills.findById(11), skills.findById(12), skills.findById(13), 
        skills.findById(14), skills.findById(15), skills.findById(16), skills.findById(17), 
        skills.findById(18), skills.findById(10)]
    }

    get skillsSD() : Skill[] {
        return this.skillsValues ;
    }
}

let skills = new Skills();

let sdSkills = new SDSkills(skills);

let sd : common.CompetenceView = {
    name: "Smart Devices",
    type: CompetenceType.SmartDevices,
    thumbnailUrl: "images/wallpapers/hardware2.jpg",
    skills: sdSkills.skillsSD,
};

common.libraryCompetences.competenceViews.push(sd)