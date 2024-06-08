import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../Servicios/AuthService';

@Injectable({
  providedIn: 'root'
})
export class AuthRedirectGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  /**
   * Método que determina si una ruta puede ser activada.
   * Redirige a la página principal si el usuario está autenticado.
   * @returns Un booleano que indica si la ruta puede ser activada.
   */
  canActivate(): boolean {
    // Verifica si el usuario está autenticado
    if (this.authService.isAuthenticated()) {
      // Si el usuario está autenticado, redirige a la página principal ('/principal')
      this.router.navigate(['/principal']);
      // Retorna falso para indicar que la ruta no puede ser activada
      return false;
    } else {
      // Si el usuario no está autenticado, permite que la ruta sea activada
      return true;
    }
  }
}
