import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de Usuarios';
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  entradas: any[]; //en el video tutorial entradas: object[], no funcionaba porque es un array local, no de objetos

  constructor(){
    

  this.entradas=[

   {titulo:"python cada dia mas presente"},
   {titulo:"java presente desde hace mas de 20 años"},
   {titulo:"javascript cada vez mas funcional"},
   {titulo:"kotlin potencia tus apps"},
   {titulo:"donde quedo pascal?"},

  ]



  }

registerUser(): void{
  
  this.registrado=true
  
  this.mensaje="Usuario Registrado"

}


}
