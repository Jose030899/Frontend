import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { tap, map, catchError } from 'rxjs/operators';
import { of } from "rxjs";

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  crearUsuario(formData: RegisterForm){
    return this.http.post(`${base_url}/usuarios`,formData);
  }

  login(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.data);
      })
    );
  }

  loginGoogle(token) {
    return this.http.post(`${base_url}/login/google`, { token }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.data);
      })
    );
  }

  
  validarToken(){
    const token = localStorage.getIten('token') || '';
    console.log(token);
    
    return this.http.get(`${base_url}/login/renew`, {headers: {
      "x-token": token,
    },
  }).pipe(
    tap((resp: any)=>{
      localStorage.setItem('token', resp.data);
      console.log(resp);
    }),
    map((resp)=>true),
    catchError((error)=>of(false))
  );
  } 
}
