import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usuarioService: UsuarioService){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    this.usuarioService.validarToken().subscribe((resp:any)=>{
      console.log(resp);
    });
    return true;
  }
}

