import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  public server: {id: number, name: string, status: string};

  public serverName = '';

  public serverStatus = '';

  public allowEdit : boolean = false;

  public changesSaved: boolean = false;

  constructor(private serversService: ServersService,private route: ActivatedRoute,private router:Router) { }

  public ngOnInit() {

    // console.log(this.route.snapshot.queryParams); // For non-reactive queryParams value
    // console.log(this.route.snapshot.fragment); // For non-reactive fragments value
    let id = +this.route.snapshot.params['id'];

    this.route.queryParams.subscribe({
      next:(queryParam)=>{
        this.allowEdit = queryParam['allowEdit'] === '1' ? true : false;
      }
    }); // For reactive queryParams values
    this.route.fragment.subscribe(); // For reactive fragment values

    this.server = this.serversService.getServer(id);

    this.serverName = this.server.name;

    this.serverStatus = this.server.status;

  }

  public onUpdateServer() {

    this.serversService.updateServer(this.server.id,
      {name: this.serverName, status: this.serverStatus});

    this.changesSaved = true;
    this.router.navigate(['../'],{relativeTo: this.route});
  }

  public canDeactivate():Observable<boolean> | Promise<boolean> | boolean{
      if(!this.allowEdit){
        return true;
      }
      if((this.serverName !== this.server.name || this.server.status !== this.server.status) && !this.changesSaved){

        return window.confirm('Are you sure you want to navigate away with unsaved changes?')

      }
  }

}
