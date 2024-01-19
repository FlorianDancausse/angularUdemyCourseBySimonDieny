import { Injectable } from '@angular/core';
import { POKEMONS } from './shared/mocks/mock-pokemon-list';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pokemons = POKEMONS;
    return { pokemons };
  }
}
