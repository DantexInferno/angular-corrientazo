import { Component, OnInit } from '@angular/core';
import { Platos } from 'src/app/modelo/platos.mode';
import { PlatosService } from 'src/app/platos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  plato:Platos=new Platos();
  constructor(private servicio:PlatosService) { }

  ngOnInit() {
  }

  insertar(platos:Platos){
    this.servicio.crearPlato(this.plato)
    .subscribe(data=>{
    alert("se agrego con exito");
    })
  }

}
