
export interface Course
{
   name : string,
   year : number,
   duration : number,
}

export class LibraryCourses
{
    public courses : Course[]

    public constructor() { 
        this.courses = []
    }
}

let libraryCourses = new LibraryCourses();

export { libraryCourses }
