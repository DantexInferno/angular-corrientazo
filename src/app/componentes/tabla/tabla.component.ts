import { Component, OnInit } from '@angular/core';
import { Platos } from 'src/app/modelo/platos.mode';
import { PlatosService } from 'src/app/platos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  platos:Platos[];
  constructor(private servicio:PlatosService, private router:Router) { }

  ngOnInit() {
    this.servicio.getPlatos()
    .subscribe(data=>{
      this.platos=data
    })
  }

  editar(plato:Platos):void{
  localStorage.setItem("id",plato.idplato.toString());
  this.router.navigate(["editar"]);
  }

}
