
export class Skill {
    public constructor(public id: number, public type: CompetenceType, public title: string, public description: string) {}

    get skillID() {
        return this.id;
    }

    get skillTitle() {
        return this.title;
    }

    get skillDescription() {
        return this.description;
    }
}

export enum CompetenceType {
    SmartDevices,
    Communication, 
    IMiddlewareAndServices,
    DataProcessing,
    HumanitiesAndInnovation,
    EnglishAndProject
}

export interface CompetenceView {
    name: string,
    type: CompetenceType,
    thumbnailUrl: string,
    skills: Skill[],
}

export class Skills {
    public skills : Skill[]

    public constructor() { 
    this.skills = [
            new Skill(10, CompetenceType.SmartDevices, "Smart Device Integration", "Be able of integrating all parts of an electronical project to realize a smart device"),
            new Skill(11, CompetenceType.SmartDevices, "Basics on Sensors", "Understand the basic notions about sensors and chains of measures (physical aspects, electronics, metrology)"),
            new Skill(12, CompetenceType.SmartDevices, "Nanoparticles Sensors", "Be able of producing a nanoparticles sensor (chemical syntesis, assembly, tests) with micro-electronical tools"),
            new Skill(13, CompetenceType.SmartDevices, "Datasheet", "Be able of designing a datasheet of the produced sensor"),
            new Skill(14, CompetenceType.SmartDevices, "Microcontroller Architecture", "Understand microcontrollers architecture and know how to use them"),
            new Skill(15, CompetenceType.SmartDevices, "Smart Devices Design", "Be able of designing the entire architecture of electronical devices (sensor + microcontroller + conditioner) depending on the application"),
            new Skill(16, CompetenceType.SmartDevices, "Sensor Signal Conditioning", "Be able of designing the signal conditioning of the sensor"),
            new Skill(17, CompetenceType.SmartDevices, "Shield", "Be able of realizing a shield to make a nanoparticles sensor communicate"),
            new Skill(18, CompetenceType.SmartDevices, "Smart Device Controller", "Be able of implementing a software to control a sensor"),

            new Skill(20, CompetenceType.Communication, "Mobile Communications Overview", "Understand the major development steps in mobile communications and the technological implementations associated to them"),
            new Skill(21, CompetenceType.Communication, "Generations of Mobile Communications", "Understand the current and future challenges in mobile communications"),
            new Skill(22, CompetenceType.Communication, "Wireless Networks", "Be able of analyzing and comparing the best wireless networks"),
            new Skill(23, CompetenceType.Communication, "Network Technologies for IoT", "Be able of proposing relevant solutions of network technologies for IoT"),
            new Skill(24, CompetenceType.Communication, "Security for IoT", "Understand and master the constraint of security to optimize IoT protocols"),
            new Skill(25, CompetenceType.Communication, "Energy for IoT", "Understand and master the constraint of energy in communication protocols for IoT"),
            new Skill(26, CompetenceType.Communication, "Signal Processing", "Know the major techniques of signal processing for digital communications and be able of explaining the basic structure of digital radiofrequency emitters and receivers"),
            new Skill(27, CompetenceType.Communication, "Storage Dimensioning", "Master the architecture of energy management systems, with simple storage, energy recovery and be able of dimensioning the storage depending on the specifications"),
            new Skill(28, CompetenceType.Communication, "Basics on Security", "Understand the basic notions of security"),
            new Skill(29, CompetenceType.Communication, "IoT Architecture Weaknesses", "Be able of identifying the weaknesses of an IoT architecture"),
            new Skill(201, CompetenceType.Communication, "Risks in IoT Security", "Know how to identify the risks of a weak IoT architecture"),
            new Skill(202, CompetenceType.Communication, "Security-improving Solutions", "Be able of proposing relevant and adapted solutions to improve the security of an IoT architecture"),

            new Skill(60, CompetenceType.EnglishAndProject, "Analysis of Problems", "Analyze an issue from a practical application"),
            new Skill(61, CompetenceType.EnglishAndProject, "Propositions of Solutions", "Propose a scientificly-made solution"),
            new Skill(62, CompetenceType.EnglishAndProject, "Prototyping", "Realize an operational prototype to answer a problem"),
            new Skill(63, CompetenceType.EnglishAndProject, "English", "Present and argue our scientifical choices in English to a jury"),
            new Skill(64, CompetenceType.EnglishAndProject, "Scientifical Paper", "Write a concise paper in English about a technical project"),
        ]
    }

    get allSkills() : Skill[] {
        return this.skills;
    }

    public findById(id : number) : Skill {
        var skill = this.skills.find((value) => value.id == id)
        return skill;
    }
} 

export class LibraryCompetences
{
    public competenceViews : CompetenceView[]

    public constructor() { 
        this.competenceViews = []
    }
}

let libraryCompetences = new LibraryCompetences();

export {libraryCompetences }
