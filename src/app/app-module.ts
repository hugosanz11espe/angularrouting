import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MusicaComponent } from './musica-component/musica-component';
import { CineComponent } from './cine-component/cine-component';
import { CasaComponent } from './casa-component/casa-component';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { MenuComponent } from './menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { NumerosParesComponent } from './components/numeros-pares-component/numeros-pares-component';
import { TablaMultiplicarComponent } from './components/tabla-multiplicar-component/tabla-multiplicar-component';
import { SelectNumerosDobles } from './components/select-numeros-dobles/select-numeros-dobles';

@NgModule({
  declarations: [
    App,
    MusicaComponent,
    CineComponent,
    CasaComponent,
    NotFoundComponent,
    MenuComponent,
    NumerosParesComponent,
    TablaMultiplicarComponent,
    SelectNumerosDobles,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
