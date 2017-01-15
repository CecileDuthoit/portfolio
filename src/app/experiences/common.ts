import { Skills, Skill, CompetenceType }   from '../competences/common';

/**
 * Represents the different kind of experience types.
 */
export enum ExperienceType {
    Personnal = 0,
    Professional = 1,
    Academic = 2
}

/**
 * Represents the different kind of content type.
 * Content Type support can be added by expanding the entry-viewer component 
 * (in app/components/entry-viewer.template.html)
 */
export enum ContentType {
    PDFDocumentURL,
    MarkdownDocumentURL, // not supported
    RawMarkdownDocument,
    Link
}

/**
 * Represents some content.
 * Content can have different types, and the contentValue will represent
 * something depending on the contentType.
 * For instance, if contentType = PDFDocumentURL, it will be an URL.
 * if contentType = RawMarkdownDocument, it will be raw markdown data.
 */
export interface Content
{
    contentType : ContentType
    contentValue : string
}

/**
 * Represents an experience in the portfolio.
 */
export interface Experience 
{
    name : string, 
    experienceType : ExperienceType
    category : string[]
    tags : string[]
    abstract : string
    conclusion : string
    competences : Skill[]
    content : Content[]
    thumbnailUrl: string
}

/**
 * The library contains all the data needed to display the portfolio website.
 * It contails all the experiences and can be extended to support more functionnalities.
 */
export class Library
{
    public experiences : Experience[]

    public constructor() { 
        this.experiences = []
    }
}

// Library singleton instance.
let library = new Library();

// Converts an ExperienceType enum value to a displayable string.
function experienceType2Str(ct : ExperienceType) : string {
    switch(ct) {
        case ExperienceType.Personnal: return "Personnal";
        case ExperienceType.Professional: return "Professional";
        case ExperienceType.Academic: return "Academic";
        default: return "Unknown"
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

export { library }
export { experienceType2Str, competenceType2Str }