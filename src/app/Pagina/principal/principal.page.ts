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

  peliculas:any

  constructor(
    private authService: AuthService,
    private router: Router,
    private buscar: BuscarPrincipalService
  ) {}

  ngOnInit() {}

  salir() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  searchMovies(peli: any) {
    this.buscar.searchMovies(peli.value).subscribe({
      next: (data: any) => {
        this.peliculas = data.results;
      },
      error: (error) => {},
    });
  }
}
