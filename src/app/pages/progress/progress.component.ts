import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent  {
 progreso: number = 85;

 get getPorcentaje(){
  return `${this.progreso}%`;
 }

 cambiarValor(valor: number){
   if(this.progreso >= 100 && valor >=0){
    return this.progreso = 100;
   }

   if(this.progreso <= 0 && valor < 0){
    return this.progreso = 0;
   }

   this.progreso = this.progreso + valor;
 }

 onChange(nuevovalor:number){
   if(nuevovalor >= 100){
     this.progreso = 100;
   }
   if(nuevovalor <= 0){
    this.progreso = 0;
  }
 }
}
