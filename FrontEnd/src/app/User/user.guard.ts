import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
 
export class UserGuard implements CanActivate{
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
        console.log(sessionStorage.user)
        if(!sessionStorage.user){
            alert('Вы не авторизовались!')
            
            return false;
        }
        return true;
    }
}