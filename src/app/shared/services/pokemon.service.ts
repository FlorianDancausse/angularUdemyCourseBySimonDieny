import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  pok: Pokemon[];

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((res) => this.log(res)),
      catchError(err => this.handleError(err, undefined))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((res) => this.log(res)),
      catchError(err => this.handleError(err, undefined))
    )
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }
    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((res) => this.log(res)),
      catchError(err => this.handleError(err, undefined))
    )
  }

  deletePokemonById(id: number): Observable<null> {
    return this.http.delete(`api/pokemons/${id}`).pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, null))
    )
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(err: Error, errorValue: any) {
    console.error(err);
    return of(errorValue);
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy',
    ];
  }
}
