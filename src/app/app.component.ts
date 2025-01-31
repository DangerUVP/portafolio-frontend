import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SeccionComponent } from './seccion/seccion.component';
import { ProjetsComponent } from "./projets/projets.component";
import { SkillComponent } from "./skill/skill.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, SkillComponent, SeccionComponent, ContactComponent,ProjetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  titleLetters:string[]=[];

  title = 'Software Developer';

  constructor(){
    this.convert();
  }

  convert(){
    this.titleLetters = this.title.split("");
    console.log(this.titleLetters);
    
  }


}
