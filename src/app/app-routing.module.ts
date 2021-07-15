import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';

const routes: Routes = [
  {path:'', redirectTo:'list-empleado', pathMatch: 'full'},  //redirecciona al principal 
  {path: 'list-empleado', component: ListEmpleadoComponent},
  {path: 'crear-empleado', component:CrearEmpleadoComponent},
  {path:'**', redirectTo:'list-empleado', pathMatch: 'full'}// Si escribe ruta  incorrecta redirecciona

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
