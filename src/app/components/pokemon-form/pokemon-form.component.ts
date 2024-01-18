import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonTypeColorPipe } from '../../pipes/pokemon-type-color.pipe';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PokemonTypeColorPipe
  ],
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.scss',
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];

  constructor(private pokemonService: PokemonService, private router: Router) {

  }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;
    if(isChecked) {
      this.pokemon.types.push(type);
    } else {
      this.pokemon.types = this.pokemon.types.filter(el => el !== type);
      // const index = this.pokemon.types.indexOf(type);  Simon's Method
      // this.pokemon.types.splice(index, 1);
    }
  }

  isTypeValid(type: string): boolean {
    if(this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    } 
    if(this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    console.log('Submit Form !');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }
}
