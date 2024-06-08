import { Injectable } from '@angular/core';

// Decorador que indica que este servicio es inyectable y está disponible a nivel de raíz de la aplicación.
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Constructor vacío ya que no se requiere inicialización específica.
  constructor() { }

  // Método para iniciar sesión y establecer el estado de autenticación del usuario en 'true'.
  login() {
    sessionStorage.setItem('isAuthenticated', 'true');
  }

  // Método para cerrar sesión y eliminar el estado de autenticación del usuario.
  logout() {
    sessionStorage.removeItem('isAuthenticated');
  }

  // Método para verificar si el usuario está autenticado.
  // Devuelve 'true' si el usuario está autenticado, de lo contrario 'false'.
  isAuthenticated(): boolean {
    return sessionStorage.getItem('isAuthenticated') === 'true';

  }
}