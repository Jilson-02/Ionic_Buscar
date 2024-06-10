import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './Guards/AuthGuard.guard';
import { AuthRedirectGuard } from './Guards/AuthRedirectGuard.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pagina/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthRedirectGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./Pagina/principal/principal.module').then( m => m.PrincipalPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./Pagina/crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
