import { Component, OnInit } from '@angular/core';
import { Platos } from 'src/app/modelo/platos.mode';
import { PlatosService } from 'src/app/platos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  platos:Platos=new Platos();
  constructor(private servicio:PlatosService,private router:Router) { }

  ngOnInit() {
    this.editar()
  }

  editar(){
    let id=localStorage.getItem("id");
    this.servicio.getPlatoId(+id)
    .subscribe(data=>{
      this.platos=data;
    })
  }

  actualizar(platos:Platos){
    this.servicio.actualizarPersona(platos)
    .subscribe(data=>{
    this.platos=data;
    alert("se actualizo con exito");
    this.router.navigate(["home"])
    })
    }
}
