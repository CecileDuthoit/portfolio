import { Component }                                                                            from '@angular/core';
import { DomSanitizer, SafeHtml,SafeUrl,SafeStyle }                                             from '@angular/platform-browser';


@Component({
    selector: 'contact',
    templateUrl: `./contact.template.html`,
})

export class ContactComponent 
{
    constructor(private sanitizer : DomSanitizer) {}

    sanitizeStyle(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustStyle(url)
    }

    get minHeight() {
        return this.sanitizer.bypassSecurityTrustStyle("200px")
    }
}