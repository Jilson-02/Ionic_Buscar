import { MensajesService } from './../../Servicios/mensajes.service';
import { BuscarPrincipalService } from './../../Servicios/buscar-principal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {

  constructor(private BuscarPrin:BuscarPrincipalService,    private mensajesService: MensajesService,) { }

  ngOnInit() {
  }

  CrearCuenta(email: any, first_name: any, last_name: any) {
    if (!email.value || !first_name.value || !last_name.value) {
      // console.log("todos los campos son requeridos");
      this.mensajesService.MessajeOk('Todos los campos son requeridos', 'alert-circle');
      return;
    }
    this.BuscarPrin.crearUsuario(email.value, first_name.value, last_name.value).subscribe({
      next: (response) => {
        // console.log("Usuario creado");
        this.mensajesService.MessajeExito('Usuario creado correctamente', 'globe');
      },
      error: (err) => {
        this.mensajesService.MessajeOk('Error al crear el usuario', 'alert-circle');
      },
    });
  }
}
