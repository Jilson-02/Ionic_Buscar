import { CrearCuentaPage } from './../crear-cuenta/crear-cuenta.page';
import { BuscarPrincipalService } from './../../Servicios/buscar-principal.service';
import { Router } from '@angular/router';
import { AuthService } from './../../Servicios/AuthService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  peliculas: any;
  mostrar: any;
  persona: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private buscar: BuscarPrincipalService
  ) { }

  ngOnInit() { 
    this.mostrarP();
  }

  salir() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }



  searchMovies(peli: any) {
    this.buscar.searchMovies(peli.value).subscribe({
      next: (data: any) => {
        this.peliculas = data.results;
      },
      error: (error) => { },
    });
  }

  mostrarP() {
    this.buscar.mostrarPeli().subscribe({
      next: (data:any) => {
        this.mostrar =data.results;
      },
      error: (error) => { },
    })
  }

  buscarPerson(person: any){
    this.buscar.searchPerson(person.value).subscribe({
      next: (data: any) => {
        this.persona = data.results
      },
      error: (error) => {}
    })
  }

  
}
