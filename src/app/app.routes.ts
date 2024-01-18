import { Routes } from '@angular/router';
import { ListPokemonComponent } from './routes/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './routes/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { EditPokemonComponent } from './routes/edit-pokemon/edit-pokemon.component';

export const routes: Routes = [
    { path: 'edit/pokemon/:id', component: EditPokemonComponent },
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
