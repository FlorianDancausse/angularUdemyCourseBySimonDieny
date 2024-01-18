import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { POKEMONS } from '../mocks/mock-pokemon-list';

@Injectable({providedIn:'root'})
export class PokemonService {
  pok: Pokemon[];

  constructor() {
    
  }

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find((pokemon) => pokemon.id === pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy',
    ];
  }
}
