import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicaComponent } from './musica-component/musica-component';
import { CineComponent } from './cine-component/cine-component';
import { CasaComponent } from './casa-component/casa-component';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { NumerosParesComponent } from './components/numeros-pares-component/numeros-pares-component';
import { TablaMultiplicarComponent } from './components/tabla-multiplicar-component/tabla-multiplicar-component';
import { SelectNumerosDobles } from './components/select-numeros-dobles/select-numeros-dobles';


const routes: Routes = [
  { path: "musica", component: MusicaComponent},
  { path: "cine", component: CineComponent},
  { path: "", component: CasaComponent},
  {path: "pares", component: NumerosParesComponent},
  {path: "tabla", component:TablaMultiplicarComponent},
  {path: "selectnumeros", component: SelectNumerosDobles},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
