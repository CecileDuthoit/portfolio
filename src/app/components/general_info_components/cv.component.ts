import { Component, Input, ViewChild, ElementRef, trigger, state, style, transition, animate }  from '@angular/core';
import { DomSanitizer, SafeHtml,SafeUrl,SafeStyle }             from '@angular/platform-browser';

@Component({
    selector: 'cv',
    templateUrl: `./cv.template.html`,
})

export class CVComponent 
{
    private _expanded : boolean = true;
    constructor(private sanitizer : DomSanitizer) {}
    
    sanitizeRessourceUrl(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }   

    open() {
        this._expanded = true
    } 

    close() {
        this._expanded = false
    } 

     get minHeight() {
        var minHeight = this._expanded ? "800px" : "80px"
        return this.sanitizer.bypassSecurityTrustStyle(minHeight)
    }
}
