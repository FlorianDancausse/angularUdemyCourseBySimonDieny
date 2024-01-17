import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.scss',
})
export class DetailPokemonComponent { }
