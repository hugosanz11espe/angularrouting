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


  constructor() { 
    this.doble = 0; 
  } 
  mostrarDoble(): void{
     this.doble = this.selectnumero.nativeElement.value *2; 
  }
}
