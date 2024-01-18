import { Routes } from '@angular/router';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';

export const routes: Routes = [
    { path: 'edit/pokemon/:id', component: EditPokemonComponent },
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
