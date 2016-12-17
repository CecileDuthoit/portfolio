import { CompetenceView }                                                   from '../competences/common';
import { Component, Input, trigger, state, style, transition, animate }     from '@angular/core';
import { DataService }                                                      from '../services/data.service'
import * as $                                                               from 'jquery'
import { Router, ActivatedRoute }                                           from '@angular/router';

export interface Field {
    name : string
    competencesViews : CompetenceView[]    
}

@Component({
    selector: 'competences',
    templateUrl: `app/components/competences.template.html`,
})

export class CompetencesComponent {

    constructor(private dataService : DataService) {}

    get competencesViews() : CompetenceView[] {
        return this.dataService.libraryCompetences.competenceViews;
    }
    
}