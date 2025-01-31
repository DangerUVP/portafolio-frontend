import { Routes } from '@angular/router';
import { ProjetsComponent } from './projets/projets.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { SeccionComponent } from './seccion/seccion.component';

export const routes: Routes = [
    {
        path:'',
        component:SeccionComponent
    },
    {
        path:'home',
        component:SeccionComponent
    },

];
