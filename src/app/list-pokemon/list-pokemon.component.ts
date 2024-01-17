import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  templateUrl: 'list-pokemon.component.html',
  styleUrl: './list-pokemon.component.scss'
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) {}

  selectPokemon(pokemon: Pokemon) {
    this.router.navigate(['pokemon', pokemon.id]);
  }
}
