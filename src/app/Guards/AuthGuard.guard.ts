import { AuthService } from './../Servicios/AuthService';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';


/**
 * AuthGuard es responsable de proteger rutas y asegurarse de que solo los usuarios autenticados puedan acceder a ellas.
 */
@Injectable({
  providedIn: 'root', // Este guard está disponible en toda la aplicación.
})
export class AuthGuard implements CanActivate {
  /**
   * Constructor del guard AuthGuard.
   * @param authService - Servicio de autenticación para verificar el estado del usuario.
   * @param router - Router para la navegación programática.
   */
  constructor(private router: Router, private authService:AuthService) { }

  /**
   * Método canActivate para determinar si una ruta puede ser activada.
   * @returns boolean - Retorna true si el usuario está autenticado, de lo contrario, navega a la ruta '/home' y retorna false.
   */
  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // Usuario autenticado, permitir acceso a la ruta.
    } else {
      this.router.navigate(['/home']); // Usuario no autenticado, redirigir a la página de inicio.
      return false; // Denegar acceso a la ruta.
    }
  }
}
