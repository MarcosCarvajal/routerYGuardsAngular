import { Injectable } from '@angular/core';
//añadimos Router para hacer redireccion de pagina cuando el usuario no es Admin
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';



//creacion de locals para validar usuario
let session = sessionStorage.setItem("user", "admisssn");
let getSession = sessionStorage.getItem("user");

//localStorage  -> indefinido sin limite
//sessionStorage -> limitado, termina cuando se cierra el navegador

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //si tenemos servicios por utilizar se agregan al constructor
  //agregamos al constructor Router
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(getSession == 'admin'){
      //Permitimos el acceso
      return true;
    }else {
      //redireccionamos a Index con el metodo .navigate
      this.router.navigate(['/index']);
      return false;
    };
  }
  
}
