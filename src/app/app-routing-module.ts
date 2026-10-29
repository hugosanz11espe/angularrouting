import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicaComponent } from './musica-component/musica-component';
import { CineComponent } from './cine-component/cine-component';
import { CasaComponent } from './casa-component/casa-component';
import { NotFoundComponent } from './not-found-component/not-found-component';

const routes: Routes = [
  { path: 'musica', component: MusicaComponent},
  { path: 'cine', component: CineComponent},
  { path: "", component: CasaComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
