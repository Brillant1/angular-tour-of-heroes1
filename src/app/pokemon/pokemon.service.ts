import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './moc-pokemon-list';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient, private router:Router) { }

  getPokemonList(): Observable <Pokemon[]> {

    return this.http.get<Pokemon[]>('api/pokemons');
    //return POKEMONS;
  }

  getPokemonById(pokemonId:number):Observable <Pokemon|undefined> {

    return this.http.get<|undefined>(`api/pokemons/${pokemonId}`)
      //return POKEMONS.find(pokemon => pokemon.id === pokemonId);
  }

  updatePokemon(pokemon:Pokemon): Observable <any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'content-Type': 'application/json' })
    };

    return this.http.put('api/pokemons', pokemon, httpOptions);
  }

  getPokemonTypeListe(): string[] {
    return ['Eau','Feu','Plante', 'Insecte', 'Normal', 'Electrik', 'Poisson', 'Fée', 'Vol', 'Combat', 'Psy'];
  }
  addPokemon(pokemon:Pokemon): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'content-Type': 'application/json' })
    };

    return this.http.post('api/pokemons', pokemon, httpOptions);

  }

  deletePokemonById(pokemonId:number):Observable <any>{
    return this.http.delete(`api/pokemons/${pokemonId}`);
  }

  private log(response:any){
    console.table(response);
  };

  private handleError(error: Error, errorValue:any) {
    console.error(error);
    return of(errorValue);
  }


}
