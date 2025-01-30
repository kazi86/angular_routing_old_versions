import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from "@angular/router";

export interface CanComponentDeactivate{
  canDeactivate: ()=>Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate>{

  constructor() {}

  //@ts-ignore
  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?  : RouterStateSnapshot){

      return component.canDeactivate;
  }

}
