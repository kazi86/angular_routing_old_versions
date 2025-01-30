import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {ServersComponent} from "./servers/servers.component";
import {ServerComponent} from "./servers/server/server.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {AuthGuardService} from "./services/auth.guard.service";
import {CanDeactivateGuardService} from "./services/can-deactivate-guard.service";

const routes : Routes = [
  {
    path:'', //localhost:4200
    component:HomeComponent
  },
  {
    path:'users', //localhost:4200/users
    component:UsersComponent,
    children:[
      {
        path:':id/:user-name', //localhost:4200/users/:id/user-name
        component:UserComponent
      },]
  },
  {
    path:'servers', //localhost:4200/servers
    component:ServersComponent,
    // canActivate:[AuthGuardService],
    canActivateChild:[AuthGuardService],
    children:[
      {
        path:':id', //localhost:4200/servers/:id/edit
        component:ServerComponent
      },
      {
        path:':id/edit', //localhost:4200/servers/:id/edit
        component:EditServerComponent,
        canDeactivate:[CanDeactivateGuardService]
      }
    ]
  },
  {path:'not-found',component:PageNotFoundComponent},
  {path:'**', redirectTo:'/not-found'}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule] // export the RouterModule with registered routes
})
export class AppRouterModule{}
