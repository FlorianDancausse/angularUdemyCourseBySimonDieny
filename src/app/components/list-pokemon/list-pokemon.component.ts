import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BorderCardDirective } from '../../directives/border-card.directive';
import { PokemonTypeColorPipe } from '../../pipes/pokemon-type-color.pipe';
import { Pokemon } from '../../models/pokemon';
import { POKEMONS } from '../../mocks/mock-pokemon-list';
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
