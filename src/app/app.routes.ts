import { Routes } from '@angular/router';
import { ProjetsComponent } from './projets/projets.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { SeccionComponent } from './seccion/seccion.component';
import { AllMyProjectsComponent } from './all-my-projects/all-my-projects.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path: 'projects',
        component: AllMyProjectsComponent
    },
    {
        path:'**',
        component:NotFoundComponent
    }

];
