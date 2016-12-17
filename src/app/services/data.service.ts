import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Observable }               from 'rxjs/Rx';
import { Inject }                   from '@angular/core';
import { library, Library }         from '../experiences/common' 
import { LibraryCompetences, libraryCompetences }         from '../competences/common' 

import '../experiences/index'
import '../competences/index'

@Injectable()
export class DataService {
    library : Library
    libraryCompetences : LibraryCompetences

    public constructor() {
        this.library = library
        this.libraryCompetences = libraryCompetences
    }
}