import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  titleLetters:string[]=[];

  title = 'Software Developer';

  constructor(){
    this.convert();
  }

  convert(){
    this.titleLetters = this.title.split("");
    
  }
}
