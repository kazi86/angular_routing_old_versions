import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private authSvc : AuthService) { }

  public ngOnInit() {
  }

  public onLoadServer(id:number){

    this.router.navigate(['/servers',id,{queryParams : {allowEdit : '1'},fragment:'loading'}]);

  }

  public onLogout(){

    this.authSvc.logout();

  }

  public onLogin(){

    this.authSvc.login();

  }

}
