import { Component } from '@angular/core';

@Component({
  selector: 'app-seccion',
  standalone: true,
  imports: [],
  templateUrl: './seccion.component.html',
  styleUrl: './seccion.component.css'
})
export class SeccionComponent {

  rol = "Actualmene me encutro trabajando como product owiner para una organizacion alemana, cuya principal actividad es el desarrollo de software cooporativo."

  upProjects = "Junto con mi colega Mateo, tenemos pensado ejecutar los siguientes projectos."


  lstProjects =[
    "Parqueadero Generico Multi-Usuario",
    "Sistema de Inventario para Empresas de Ropa",
    "Sistema de Gestion de Pasajero",
  ]


}
