import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',

  template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" alt="">
      </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon" ></app-pokemon-form>

  `
})
export class EditPokemonComponent implements OnInit {

  pokemon:Pokemon|undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService

  ) { }

  ngOnInit(){
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon=> this.pokemon = pokemon);
    }
  }

}
