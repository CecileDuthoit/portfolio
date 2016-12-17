import { CompetenceType }                                                   from '../../competences/common';
import { CompetenceView }                                                   from '../../competences/common';
import { Component, Input, trigger, state, style, transition, animate }     from '@angular/core';
import { DataService }                                                      from '../../services/data.service'
import { DomSanitizer, SafeHtml, SafeUrl,SafeStyle }                        from '@angular/platform-browser';

@Component({
    selector: 'competence-viewer',
    templateUrl: `./competence-viewer.template.html`,
})

export class CompetenceViewerComponent {
    @Input("competenceView") competenceView : CompetenceView;
    public competenceType = CompetenceType;
    
    constructor(private sanitizer : DomSanitizer, private dataService : DataService) { }

    sanitizeStyle(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustStyle(url)
    }
    
}