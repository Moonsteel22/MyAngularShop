import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
 
export class UserGuard implements CanActivate{
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
        if(!sessionStorage.user){
            alert('Вы не авторизовались!')
            
            return false;
        }
        return true;
    }
}