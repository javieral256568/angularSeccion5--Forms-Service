import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';

//import { HeroeComponent } from './heroes/heroe/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent,
    //HeroeComponent,  /* Ya no es un componente, se importa como modulo */
    //ListadoComponent /* Ya no es un componente, se importa como modulo */
  ],
  imports: [
    BrowserModule,
    HeroesModule,  /* Ya no es un componente, se importa como modulo */
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
