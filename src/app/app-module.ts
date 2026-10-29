import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MusicaComponent } from './musica-component/musica-component';
import { CineComponent } from './cine-component/cine-component';
import { CasaComponent } from './casa-component/casa-component';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { MenuComponent } from './menu-component/menu-component';

@NgModule({
  declarations: [
    App,
    MusicaComponent,
    CineComponent,
    CasaComponent,
    NotFoundComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
