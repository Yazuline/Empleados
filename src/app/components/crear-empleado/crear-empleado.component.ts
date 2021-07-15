import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
createEmpleado:FormGroup;
submitted=false;

  constructor(private fb: FormBuilder,
     private _empleadoService:EmpleadoService, private router:Router) {

    this.createEmpleado =this.fb.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      documento:['', Validators.required],
      salario:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  agregarEmpleado(){
    this.submitted=true;
    if(this.createEmpleado.invalid){
      return;
    }
    const empleado:any ={ 
      nombre:this.createEmpleado.value.nombre,
      apellido:this.createEmpleado.value.apellido,
      documento:this.createEmpleado.value.documento,
      salario:this.createEmpleado.value.salario,
      fechaCreacion: new Date(),
      fechaActualizacion:new Date()

    }
      this._empleadoService.agregarEmpleado(empleado).then(()=>{
        console.log('empleado agregado con exito!');
        this.router.navigate(['/list-empleado']);
      }).catch(error =>{
        console.log(error);
      })
  }
}


