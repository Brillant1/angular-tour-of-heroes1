import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonModule } from './pokemon.module';
import { AppRoutingModule } from '../app-routing.module';

import { AppComponent } from "../AppComponent";
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PokemonFormComponent,

  ],
  imports: [
    BrowserModule,
    PokemonModule,
    FormsModule,

    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
