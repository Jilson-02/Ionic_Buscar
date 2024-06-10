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

  searchPerson(nombrePer: string){
    return this.http.get(
      `https://api.themoviedb.org/3/search/person?api_key=9abbf40f6b34d5e6bec52061465bcc5c&query=${nombrePer}&include_adult=true&language=es-ES&page=1`
    )
  }

  mostrarPeli(){
    return this.http.get(`https://api.themoviedb.org/3/trending/all/day?api_key=9abbf40f6b34d5e6bec52061465bcc5c&language=es-ES`
    );
  }

  crearUsuario(email: string, first_name: string,last_name:string) {
    const url = 'https://reqres.in/api/users';
    const body = { email,first_name,last_name };

    return this.http.post(url, body);
  }

  
}
