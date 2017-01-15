import { Component, Input, ViewChild, ElementRef, trigger, state, style, transition, animate }  from '@angular/core';
import { DomSanitizer, SafeHtml,SafeUrl,SafeStyle }             from '@angular/platform-browser';

@Component({
    selector: 'cv',
    templateUrl: `./cv.template.html`,
})

export class CVComponent 
{
    private _expanded : boolean = false;
    constructor(private sanitizer : DomSanitizer) {}
    
    sanitizeRessourceUrl(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }   

     toogleExpand() {
        this._expanded = !this._expanded
    } 

     get minHeight() {
        var minHeight = this._expanded ? "800px" : "160px"
        return this.sanitizer.bypassSecurityTrustStyle(minHeight)
    }
}
