import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }  from './components/app.component';
import { UserPanelComponent } from './components/userpanel.component';
import { DashboardComponent } from './components/dashboard.component';
import { GeneralInformationComponent } from './components/general-information.component';
import { CompetencesComponent } from './components/competences.component';

const appRoutes: Routes = [
  { path: 'portfolio', component: DashboardComponent },
  { path: 'portfolio/:filter/:value', component: DashboardComponent },
  { path: 'presentation', component: GeneralInformationComponent },
  { path: 'competences', component: CompetencesComponent },
 { path: '**', component: GeneralInformationComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}