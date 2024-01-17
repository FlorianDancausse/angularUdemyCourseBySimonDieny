import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../../mocks/mock-pokemon-list';
import { Pokemon } from '../../models/pokemon';
import { PokemonTypeColorPipe } from '../../pipes/pokemon-type-color.pipe';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    PokemonTypeColorPipe
  ],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.scss',
})
export class DetailPokemonComponent implements OnInit{
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if(pokemonId) {
      this.pokemon = POKEMONS.find(pokemon => pokemon.id === +pokemonId);
    }
  }

  goBack(): void {
    this.router.navigate(['/pokemons'])
  }
}
