import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }  from './components/app_layout_components/app.component';
import { UserPanelComponent } from './components/app_layout_components/userpanel.component';
import { DashboardComponent } from './components/experience_components/dashboard.component';
import { GeneralInfoComponent } from './components/general_info_components/general-info.component';
import { HomeComponent } from './components/home_components/home.component';
import { CompetencesComponent } from './components/competence_components/competences.component';

const appRoutes: Routes = [
  { path: 'experiences', component: DashboardComponent },
  { path: 'experiences/:filter/:value', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'general-info', component: GeneralInfoComponent },
  { path: 'competences', component: CompetencesComponent },
 { path: '**', component: HomeComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}