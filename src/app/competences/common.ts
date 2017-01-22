
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
            new Skill(10, CompetenceType.SmartDevices, "Smart Device Integration", "Be able to integrate all parts of an electronical project to realize a smart device"),
            new Skill(11, CompetenceType.SmartDevices, "Basics on Sensors", "Understand the basic notions about sensors and chains of measures (physical aspects, electronics, metrology)"),
            new Skill(12, CompetenceType.SmartDevices, "Nanoparticles Sensors", "Be able to produce a nanoparticles sensor (chemical syntesis, assembly, tests) with micro-electronical tools"),
            new Skill(13, CompetenceType.SmartDevices, "Datasheet", "Be able to design a datasheet of the produced sensor"),
            new Skill(14, CompetenceType.SmartDevices, "Microcontroller Architecture", "Understand microcontrollers architecture and know how to use them"),
            new Skill(15, CompetenceType.SmartDevices, "Smart Devices Design", "Be able to design the entire architecture of electronical devices (sensor + microcontroller + conditioner) depending on the application"),
            new Skill(16, CompetenceType.SmartDevices, "Sensor Signal Conditioning", "Be able to design the signal conditioning of the sensor"),
            new Skill(17, CompetenceType.SmartDevices, "Shield", "Be able to realize a shield to make a nanoparticles sensor communicate"),
            new Skill(18, CompetenceType.SmartDevices, "Smart Device Controller", "Be able to implement a software to control a sensor"),

            new Skill(20, CompetenceType.Communication, "Mobile Communications Overview", "Understand the major development steps in mobile communications and the technological implementations associated to them"),
            new Skill(21, CompetenceType.Communication, "Generations of Mobile Communications", "Understand the current and future challenges in mobile communications"),
            new Skill(22, CompetenceType.Communication, "Wireless Networks", "Be able to analyze and comparing the best wireless networks"),
            new Skill(23, CompetenceType.Communication, "Network Technologies for IoT", "Be able to propose relevant solutions of network technologies for IoT"),
            new Skill(24, CompetenceType.Communication, "Security for IoT", "Understand and master the constraint of security to optimize IoT protocols"),
            new Skill(25, CompetenceType.Communication, "Energy for IoT", "Understand and master the constraint of energy in communication protocols for IoT"),
            new Skill(26, CompetenceType.Communication, "Signal Processing", "Know the major techniques of signal processing for digital communications and be able of explaining the basic structure of digital radiofrequency emitters and receivers"),
            new Skill(27, CompetenceType.Communication, "Storage Dimensioning", "Master the architecture of energy management systems, with simple storage, energy recovery and be able of dimensioning the storage depending on the specifications"),
            new Skill(28, CompetenceType.Communication, "Basics on Security", "Understand the basic notions of security"),
            new Skill(29, CompetenceType.Communication, "IoT Architecture Weaknesses", "Be able to identify the weaknesses of an IoT architecture"),
            new Skill(201, CompetenceType.Communication, "Risks in IoT Security", "Know how to identify the risks of a weak IoT architecture"),
            new Skill(202, CompetenceType.Communication, "Security-improving Solutions", "Be able to propose relevant and adapted solutions to improve the security of an IoT architecture"),

            new Skill(30, CompetenceType.IMiddlewareAndServices, "Definition of SOA", "Be able to define a Services-Oriented Architecture (SOA)"),
            new Skill(31, CompetenceType.IMiddlewareAndServices, "Web services in SOA", "Deploy a SOA by implementing web services"),
            new Skill(32, CompetenceType.IMiddlewareAndServices, "SOAP for SOA", "Deploy and configure a SOA using SOAP protocol"),
            new Skill(33, CompetenceType.IMiddlewareAndServices, "REST for SOA", "Deploy and configure a SOA using REST protocol and architecture"),
            new Skill(34, CompetenceType.IMiddlewareAndServices, "Services orchestrator for SOA", "Integrate a services orchestrator in a SOA"),
            new Skill(35, CompetenceType.IMiddlewareAndServices, "Standards for IoT", "Know and understand the major standards for IoT"),
            new Skill(36, CompetenceType.IMiddlewareAndServices, "Standard IoT system", "Deploy an architecture that will follow a standard and implement a system for sensors network to the final services"),
            new Skill(37, CompetenceType.IMiddlewareAndServices, "OM2M", "Deploy and configure an IoT architecture using OM2M"),
            new Skill(38, CompetenceType.IMiddlewareAndServices, "REST for IoT", "Interact with objects by using a REST architecture"),
            new Skill(39, CompetenceType.IMiddlewareAndServices, "New technologies of connected objects", "Integrate a new technology of connected objects in an IoT architecture"),
            new Skill(301, CompetenceType.IMiddlewareAndServices, "Notion of cloud", "Understand the notion of cloud"),
            new Skill(302, CompetenceType.IMiddlewareAndServices, "Cloud infrastructure", "Use a cloud infrastructure in an \"Infrastructure As A Service\" mode"),
            new Skill(303, CompetenceType.IMiddlewareAndServices, "IoT plateform on the cloud", "Deploy and adapt automaticly a plateform for IoT on the cloud"),
            new Skill(304, CompetenceType.IMiddlewareAndServices, "PaaS on OM2M", "Deploy a PaaS architecture on OM2M"),
            new Skill(305, CompetenceType.IMiddlewareAndServices, "Automatic PaaS architecture", "Make a PaaS architecture automatic"),

            new Skill(40, CompetenceType.DataProcessing, "Phases in software development", "Define the different phases for software development"),
            new Skill(41, CompetenceType.DataProcessing, "Methodologies of project management", "Know the different methodologies of project management"),
            new Skill(42, CompetenceType.DataProcessing, "Apply a methodology of project management", "Apply a methodology of project management for the chosen project"),
            new Skill(43, CompetenceType.DataProcessing, "Application model", "Design and understand a conceptual model for a specific application"),
            new Skill(44, CompetenceType.DataProcessing, "Infer knowledge", "Be able to infer new knowledge from a knowledge base (terminology and assertions)"),
            new Skill(45, CompetenceType.DataProcessing, "Semantic meta-data", "Be able to enrich data with semantic meta-data"),
            new Skill(46, CompetenceType.DataProcessing, "Data representation", "Know how to explore and represent data"),
            new Skill(47, CompetenceType.DataProcessing, "R", "Master R language"),
            new Skill(48, CompetenceType.DataProcessing, "Bypass technics", "Master the complexity of statistic treatments and the bypass technics"),

            new Skill(50, CompetenceType.HumanitiesAndInnovation, "Creative issue solving", "Solve an issue with a creative way (implement different methods of creativity to follow the creative process: ante beginning, identification, incubation, lightening, selection of ideas)"),
            new Skill(51, CompetenceType.HumanitiesAndInnovation, "Ante-innovation phase", "Develop the ante-innovation phase (technological watch, competitional risks, ante analysis in collaboration with INPI)"),
            new Skill(52, CompetenceType.HumanitiesAndInnovation, "Processes for innovation", "Experiment the production process, validation process, broadcast process, acceptance process (social risks) and analyze the consequences of the innovation considered."),
            new Skill(53, CompetenceType.HumanitiesAndInnovation, "Business plan", "Make a business plan (funds and marketing of innovative products)"),
            new Skill(54, CompetenceType.HumanitiesAndInnovation, "Work in group", "Work in group with people from other technical speciality"),
            new Skill(55, CompetenceType.HumanitiesAndInnovation, "Answer a problematic", "Propose a strategy to answer a problematic"),
            new Skill(56, CompetenceType.HumanitiesAndInnovation, "Strategy model", "Propose a model that corresponds to a strategy answering a problematic"),
            new Skill(57, CompetenceType.HumanitiesAndInnovation, "Share hypothesis", "Propose and share hypothesis"),
            new Skill(58, CompetenceType.HumanitiesAndInnovation, "Experimental protocol", "Choose, design and justify a protocol or an experimental process"),
            new Skill(59, CompetenceType.HumanitiesAndInnovation, "Learning-methods analysis", "Think about our own learning processes and methods"),
            new Skill(501, CompetenceType.HumanitiesAndInnovation, "Valorisation of experiences", "Value all our scholar, professional or personal experiences and what we have learned from them"),
            new Skill(502, CompetenceType.HumanitiesAndInnovation, "Autonomous learning", "Become autonomous and responsable of our own learning process"),

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

function competenceType2Str(ct : CompetenceType) : string {
    switch(ct) {
        case CompetenceType.Communication: return "Communication";
        case CompetenceType.DataProcessing: return "Data Processing";
        case CompetenceType.EnglishAndProject: return "English & Project";
        case CompetenceType.HumanitiesAndInnovation: return "Humanities & Innovation";
        case CompetenceType.SmartDevices: return "Smart Devices";
        case CompetenceType.IMiddlewareAndServices: return "Middleware & Services";
        default: return "Unknown"
    }
}

let libraryCompetences = new LibraryCompetences();

export { libraryCompetences, competenceType2Str }
