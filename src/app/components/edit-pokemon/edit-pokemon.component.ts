import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonFormComponent],
  templateUrl: './edit-pokemon.component.html',
  styleUrl: './edit-pokemon.component.scss'
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon|undefined;

  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    const pokemonId: string|null = this.activatedRoute.snapshot.paramMap.get('id');
    if(pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }
}
