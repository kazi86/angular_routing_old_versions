import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import {RouterOutlet} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRouterModule} from "./app.router.module";
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth.guard.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterOutlet,
    AppRouterModule
  ],
  providers: [ServersService,AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
