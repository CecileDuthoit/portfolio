import { Component }                                    from '@angular/core';
import { Http, Response }                               from '@angular/http';
import { Observable }                                   from 'rxjs/Observable';
import { DataService }                                  from '../../services/data.service'
import { DomSanitizer, SafeHtml,SafeUrl,SafeStyle }     from '@angular/platform-browser';

@Component({
    selector: 'home',
    templateUrl: './home.template.html'
})

export class HomeComponent  { 
    constructor() {        
        
    }
}