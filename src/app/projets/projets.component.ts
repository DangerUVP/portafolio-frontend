import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})



export class ProjetsComponent {
  
  p1= {
    nombre: "SICODUVP",
    descripcion: "Sistema de Gestion Documental",
    logo : "logo2.webp"
  }
  p2={
    nombre : "PARQUEADERO",
    descripcion :"Sistema de Gestion de Ingresos",
    logo : "logo1.jpg"

  }

  p3= {
    nombre: "LUZ ANGELA",
    descripcion : "Sistema de Gestion Farmaceutico",
    logo : "logo3.webp"

  }

  p4 = {
    nombre: "MARKET-PLACE",
    descripcion: "Sistema de Gestion Compra-Venta",
    logo : "logo4.webp"

  }

  lstProjectos=[this.p1, this.p2,this.p3, this.p4] 

  
}
