import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { EditarComponent } from './componentes/editar/editar.component';

const routes: Routes = [
  {path:'home',component:TablaComponent},
  {path:'insertar',component:FormularioComponent},
  {path:'editar',component:EditarComponent},
  {path:'',component:TablaComponent,pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
