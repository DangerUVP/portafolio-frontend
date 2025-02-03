import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SeccionComponent } from './seccion/seccion.component';
import { ProjetsComponent } from "./projets/projets.component";
import { SkillComponent } from "./skill/skill.component";
import { ContactComponent } from "./contact/contact.component";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SkillComponent, SeccionComponent, ContactComponent, ProjetsComponent, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  


}
