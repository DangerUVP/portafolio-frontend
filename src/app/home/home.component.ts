import { Component } from '@angular/core';
import { ProjetsComponent } from '../projets/projets.component';
import { ContactComponent } from '../contact/contact.component';
import { SeccionComponent } from '../seccion/seccion.component';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SkillComponent, SeccionComponent, ContactComponent, ProjetsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
