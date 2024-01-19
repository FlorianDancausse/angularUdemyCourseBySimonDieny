import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BorderCardDirective } from '../../shared/directives/border-card.directive';
import { PokemonTypeColorPipe } from '../../shared/pipes/pokemon-type-color.pipe';
import { Pokemon } from '../../shared/models/pokemon';
import { Router, RouterModule } from '@angular/router';
import { PokemonService } from '../../shared/services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    BorderCardDirective,
    PokemonTypeColorPipe,
    RouterModule
  ],
  templateUrl: 'list-pokemon.component.html',
  styleUrl: './list-pokemon.component.scss'
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe({
      next: (res) => this.pokemonList = res
    });
  }

  selectPokemon(pokemon: Pokemon) {
    this.router.navigate(['pokemon', pokemon.id]);
  }
}
