import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }  from './components/app.component';
import { UserPanelComponent } from './components/userpanel.component';
import { DashboardComponent } from './components/dashboard.component';
import { GeneralInfoComponent } from './components/general-info.component';
import { HomeComponent } from './components/home.component';
import { CompetencesComponent } from './components/competences.component';

const appRoutes: Routes = [
  { path: 'portfolio', component: DashboardComponent },
  { path: 'portfolio/:filter/:value', component: DashboardComponent },
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