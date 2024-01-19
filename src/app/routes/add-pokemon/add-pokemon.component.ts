import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../shared/models/pokemon';
import { PokemonFormComponent } from '../edit-pokemon/pokemon-form/pokemon-form.component';

@Component({
  selector: 'app-add-pokemon',
  standalone: true,
  imports: [PokemonFormComponent],
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.scss'
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }
}
