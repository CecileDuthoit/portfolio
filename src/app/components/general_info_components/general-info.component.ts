import { Component, Input, trigger, state, style, transition, animate }     from '@angular/core';
import { ContactComponent }                                                 from './contact.component';
import { Course, LibraryCourses, libraryCourses }                           from '../../courses/common'
import { DataService }                                                      from '../../services/data.service'

@Component({
    selector: 'general-info',
    templateUrl: `./general-info.template.html`,
})

export class GeneralInfoComponent 
{
    private _background : boolean = true;

    constructor(private dataService : DataService) {}
    
    isBackground() : boolean {
        this._background = !this._background;
        return this._background;
    }

      get courses() : Course[] {
        return this.dataService.libraryCourses.courses;
    }
    
}