import { Component } from '@angular/core';

@Component({
  selector: 'app-seccion',
  standalone: true,
  imports: [],
  templateUrl: './seccion.component.html',
  styleUrl: './seccion.component.css'
})
export class SeccionComponent {

  rol = "Actualmene me encuentro trabajando como Product Owiner para una organizacion alemana, cuya principal actividad es el desarrollo de software cooporativo."

  upProjects = "Hago parte de un grupo de desarrollo llamado TimeRoom, en el cual se tiene planificado la implementación de los siguientes proyectos."


  lstProjects =[
    "Parqueadero Generico Multi-Usuario",
    "Sistema de Inventario para Empresas de Ropa",
    "Sistema de Gestion para  Pasajeros",
  ]


}
