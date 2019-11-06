import { Injectable } from '@angular/core';
import { Platos } from './modelo/platos.mode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  platos:Platos[];
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { 
    console.log("servicio on");
    
  }


url="http://localhost:4001/platos";


crearPlato(plato:Platos):Observable<Platos>{
  return this.http.post<Platos>(this.url+"/insertar",plato,{headers:this.httpHeaders});
  }

getPlatos(){
  return this.http.get<Platos[]>(this.url);
}

getPlatoId(id:number){
  return this.http.get<Platos>(this.url+"/"+id);
}

actualizarPersona(platos:Platos):Observable<Platos>{
  return this.http.put<Platos>(this.url+"/"+platos.idplato,platos,{headers:this.httpHeaders});
}

}
