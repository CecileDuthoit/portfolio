import { Component, Input, ViewChild, ElementRef, trigger,
         state, style, transition, animate }                            from '@angular/core';
import { Http, Response }                                               from '@angular/http';
import { Observable }                                                   from 'rxjs/Observable';
import { DataService }                                                  from '../../services/data.service'
import { Experience, experienceType2Str, competenceType2Str }           from '../../experiences/common'
import * as $                                                           from 'jquery'
import { Router, ActivatedRoute }                                       from '@angular/router';

export interface Field {
    name : string
    experiences : Experience[]    
}

export interface Filter {
    name : string
    displayName : string
}

export type FilterFunction = ((experience : Experience) => string[]);

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.template.html',
    animations: [
        trigger('isActive', [
            transition(
                ':enter', [
                    style({
                        transform: 'translateX(100%)', 
                        opacity: 0,
                        height: '0px',
                        overflow: 'hidden',
                    }),
                    animate('400ms', style({
                        transform: 'translateX(0)',
                        overflow: 'hidden',
                        opacity: 1,
                        height: '*'
                    }))
                ]
            ),
            transition(
                ':leave', [
                    style({
                        transform: 'translateX(0)',
                        opacity: 1,
                        overflow: 'hidden',
                        height: '*'
                    }),
                    animate('400ms', style({
                        height: '0px',
                        overflow: 'hidden',
                        transform: 'translateX(100%)',
                        opacity: 0
                    }))
                ]
            )
        ])
    ]
})
export class DashboardComponent  { 
    ExperienceByField: { [id : string]: Experience[] }

    /** 
     * Function filtering experiences : returns a 'category' string from an Experience. 
     * It is used to classify experiences.
     */
    filterFunction: FilterFunction;
    /**
     * Name of the filter.
     * This value is usefull to determine URL parameters.
     */
    filterName : string;
    /**
     * Current value of the filter string.
     * Represents the 'category' to be displayed.
     */
    filterValue: string = "all";
    filters : Filter[];

    constructor(private route : ActivatedRoute, private dataService : DataService) {
        this.filters = [
            { name: "category", displayName: "Domain" },
            { name: "experienceType", displayName: "Experience Type" },
            { name: "competenceType", displayName: "Competence Type" }
        ]

        this.filterName = "category"
        this.filterFunction = this.getFilterFunction("")
        this.filterValue = "all"
        this.computeCategories()
    }

    getFilterFunction(filterName : string) : FilterFunction {
        switch(filterName) {
            case "category":
                return (experience : Experience) => { return [experience.category] }
            case "experienceType":
                return (experience : Experience) => { return [experienceType2Str(experience.experienceType)] }
            case "competenceType":
                return (experience : Experience) => { return experience.competences.map((competence) => competenceType2Str(competence.id)) }
            default:
                return (experience : Experience) => { return [experience.category] }
        }
    }

    /**
     * Called on component initialization.
     * Used to subscribe to routes.
     */
    ngOnInit() {
        this.route
            .params
            .subscribe(params => {
                this.filterName = params['filter'] == undefined ? "category" : params['filter']
                this.filterValue = params['value'] == undefined ? "all" : params['value']
                this.filterFunction = this.getFilterFunction(this.filterName)
                this.computeCategories()
        });
    }

    /**
     * Computes the distinct categories based on the filter function.
     */
    computeCategories() {
        let categories : { [id : string]: Experience[] } = {}
        for(let experience of this.dataService.library.experiences) {
            let filterValues = this.filterFunction(experience)
            for (let filterValue of filterValues) {
                if(!(filterValue in categories))
                    categories[filterValue] = []
            
                categories[filterValue].push(experience)
            }
        }

        this.ExperienceByField = categories
    }

    /**
     * Returns true if the given experience is active in the current context.
     */
    isActive(experience : Experience) : boolean {
        if(this.filterValue == "all")
            return true
        else {
            return this.filterFunction(experience).indexOf(this.filterValue) != -1
        }
    }

    /**
     * Gets the list of active experiences.
     */
    get activexperiences() : Experience[] {
        if(this.filterValue == "all") {
            return this.dataService.library.experiences
        } else {
            var othis = this
            return this.dataService.library.experiences.filter((experience) => {
                return othis.isActive(experience)
            })
        }
    }
    
    /**
     * Gets the complete list of portfolio experiences.
     */
    get experiences() : Experience[] {
        return this.dataService.library.experiences
    }

    /**
     * Gets the list of category names based on the current filter.
     */
    get categories() : string[] {
        let cats = []
        for(let category in this.ExperienceByField) {
            cats.push(category)
        }
        return cats
    }
}