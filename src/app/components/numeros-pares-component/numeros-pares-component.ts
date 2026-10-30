import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-numeros-pares-component',
  standalone: false,
  styleUrl: './numeros-pares-component.css',
  templateUrl: './numeros-pares-component.html',
})
export class NumerosParesComponent {
  @ViewChild("cajainicio") cajainicio!: ElementRef;
  @ViewChild("cajafin") cajafin!: ElementRef;
  arrayNumeros!: number[];

   constructor() {
     this.arrayNumeros = []
   }

  mostrarPares(): void{
    let inicio = parseInt(this.cajainicio.nativeElement.value);
    let fin = parseInt(this.cajafin.nativeElement.value);
    for(let i = 1; i <= fin; i++){
      if(i % 2 == 0){
        this.arrayNumeros.push(i);
      }
    }
  }
}