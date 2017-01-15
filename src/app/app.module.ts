import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }   from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';


import { AppComponent }  from './components/app_layout_components/app.component';
import { UserPanelComponent } from './components/app_layout_components/userpanel.component';
import { DashboardComponent } from './components/experience_components/dashboard.component';
import { MarkdownComponent } from './components/app_layout_components/markdown.component';
import { ExperienceViewerComponent } from './components/experience_components/experience-viewer.component';
import { HomeComponent } from './components/home_components/home.component';
import { GeneralInfoComponent } from './components/general_info_components/general-info.component';
import { DataService } from './services/data.service';
import { CompetencesComponent } from './components/competence_components/competences.component';
import { CompetenceViewerComponent } from './components/competence_components/competence-viewer.component';
import { ContactComponent} from './components/general_info_components/contact.component' ;
import { CVComponent} from './components/general_info_components/cv.component' ;

import * as router from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, 
                  HttpModule,
                  AppRoutingModule,
                  FormsModule,
                ],
  declarations: [ AppComponent, 
                  UserPanelComponent, 
                  DashboardComponent,
                  ExperienceViewerComponent,
                  MarkdownComponent,
                  HomeComponent,
                  GeneralInfoComponent,
                  ContactComponent,
                  CompetencesComponent,
                  CompetenceViewerComponent,
                  CVComponent
                ],
  providers:    [
    DataService,
  ],
  bootstrap:    [ AppComponent ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule { }