import { AuthService } from './../../Servicios/AuthService';
import { MensajesService } from './../../Servicios/mensajes.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private router: Router,
    private mensajesService: MensajesService,
    private authService:AuthService
  ) {}

  Login(email:any, password:any){
    if(email.value == "jilson@gmail.com" && password.value == "123456"){
      this.mensajesService.MessajeOk("Bienvenido", "globe");
      this.authService.login();
      this.router.navigateByUrl('/principal')
    }
    else{
      alert('Campos requeridos')
    }
  }
}
