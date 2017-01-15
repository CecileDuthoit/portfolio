import { Component, Input, ViewChild, ElementRef, trigger, state, style, transition, animate }  from '@angular/core';
import { Router }                                                                               from '@angular/router'
import { Http, Response }                                                                       from '@angular/http';
import { Observable }                                                                           from 'rxjs/Observable';
import { DataService }                                                                          from '../../services/data.service'
import { Experience, ContentType, ExperienceType  }                                             from '../../experiences/common'
import { CompetenceType }                                                                       from '../../competences/common';
import { DomSanitizer, SafeHtml,SafeUrl,SafeStyle }                                             from '@angular/platform-browser';

@Component({
    selector: 'experience-viewer',
    templateUrl: './experience-viewer.template.html'
})

export class ExperienceViewerComponent  { 
    @Input("experience") experience : Experience;
    @ViewChild("viewer") viewer : ElementRef;

    public contentType = ContentType
    public experienceType = ExperienceType
    public competenceType = CompetenceType
    private _expanded : boolean = false;
    constructor(private sanitizer : DomSanitizer, private dataService : DataService, private router : Router) {}

    /**
     * Minimal height of the Experience viewer component.
     * If it is a pdf file, the minHeight will grow  when the card component is
     * revealed. 
     */
    get minHeight() {
        var value;
        if (this.experience.content != null)
        {
            var minHeight = this._expanded ? "800px" : "200px"
            value = this.experience.content[0].contentType == ContentType.PDFDocumentURL ? minHeight : "200px"
        }
        else
            value = "200px"
        return this.sanitizer.bypassSecurityTrustStyle(value)
    }

    sanitizeRessourceUrl(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }

    sanitizeUrl(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(url)
    }

    sanitizeStyle(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustStyle(url)
    }

    toogleExpand() {
        this._expanded = !this._expanded
    }
}