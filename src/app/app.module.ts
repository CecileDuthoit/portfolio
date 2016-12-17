import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }   from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';


import { AppComponent }  from './components/app.component';
import { UserPanelComponent } from './components/userpanel.component';
import { DashboardComponent } from './components/dashboard.component';
import { MarkdownComponent } from './components/markdown.component';
import { ExperienceViewerComponent } from './components/experience-viewer.component';
import { HomeComponent } from './components/home.component';
import { GeneralInfoComponent } from './components/general-info.component';
import { DataService } from './services/data.service';
import { CompetencesComponent } from './components/competences.component';
import { CompetenceViewerComponent } from './components/competence-viewer.component';

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
                  CompetencesComponent,
                  CompetenceViewerComponent,
                ],
  providers:    [
    DataService,
  ],
  bootstrap:    [ AppComponent ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule { }