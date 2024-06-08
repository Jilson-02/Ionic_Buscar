import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscarPrincipalService {

  constructor(private http:HttpClient) { }

  searchMovies(peliculasnombre: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=9abbf40f6b34d5e6bec52061465bcc5c&query=${peliculasnombre}&include_adult=true&language=es-ES&page=3`
    );
  }
}
