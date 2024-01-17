import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: 'list-pokemon.component.html',
  styleUrl: './list-pokemon.component.scss'
})
export class ListPokemonComponent { }
