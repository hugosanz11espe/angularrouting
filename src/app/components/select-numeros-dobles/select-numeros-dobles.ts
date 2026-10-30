import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-numeros-dobles',
  standalone: false,
  styleUrl: './select-numeros-dobles.css',
  templateUrl: './select-numeros-dobles.html',
})
export class SelectNumerosDobles {
  @ViewChild("selectnumero") selectnumero!: ElementRef;
  doble: number;
  arrayNumeros: number[]


  constructor() { 
    this.doble = 0; 
    this.arrayNumeros = [];
  } 

  generarNumero(): void { 
    let random = Math.floor(Math.random() * 100) + 1; 
    this.arrayNumeros.push(random); 

  }



  mostrarDoble(): void{
     this.doble = this.selectnumero.nativeElement.value *2; 
  }
}
