import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild{

  constructor(private authSvc : AuthService, private router : Router) {
  }

  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.authSvc.isAuthenticated().then((authenticated : boolean)=>{
      if(authenticated){
        return true;
      }
      else{
        this.router.navigate(['/']) //navigate to the root level
      }
    });

  }

  // @ts-ignore
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    this.canActivate(childRoute,state);

  }

}
