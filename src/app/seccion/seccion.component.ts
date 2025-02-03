import { Component } from '@angular/core';

@Component({
  selector: 'app-seccion',
  standalone: true,
  imports: [],
  templateUrl: './seccion.component.html',
  styleUrl: './seccion.component.css'
})
export class SeccionComponent {

  rol = "My name is Danger, I love to code and create software."

  upProjects = "I'm a TimeRoom's member which is a software develop organization  and we currently have planned to implements the following projects."


  lstProjects =[
    "Parqueadero Generico Multi-Usuario",
    "Sistema de Inventario para Empresas de Ropa",
    "Sistema de Gestion para  Pasajeros",
  ]


}
