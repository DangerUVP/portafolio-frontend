import { Component } from '@angular/core';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})



export class ProjetsComponent {
  
  p1= {
    nombre: "SICODUVP",
    descripcion: "Sistema de Gestion Documental"
  }
  p2={
    nombre : "PARQUEADERO",
    descripcion :"Sistema de Gestion de Ingresos"
  }

  p3= {
    nombre: "LUZ ANGELA",
    descripcion : "Sistema de Gestion Farmaceutico"
  }

  p4 = {
    nombre: "MARKET-PLACE",
    descripcion: "Sistema de Gestion Compra-Venta"
  }

  lstProjectos=[this.p1, this.p2,this.p3, this.p4] 

  
}
