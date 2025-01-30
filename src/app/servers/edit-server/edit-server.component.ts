import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute} from "@angular/router";

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

  constructor(private serversService: ServersService,private route: ActivatedRoute) { }

  public ngOnInit() {

    // console.log(this.route.snapshot.queryParams); // For non-reactive queryParams value
    // console.log(this.route.snapshot.fragment); // For non-reactive fragments value

    this.route.queryParams.subscribe({
      next:(queryParam)=>{
        this.allowEdit = queryParam['allowEdit'] === '1' ? true : false;
      }
    }); // For reactive queryParams values
    this.route.fragment.subscribe(); // For reactive fragment values

    this.server = this.serversService.getServer(1);

    this.serverName = this.server.name;

    this.serverStatus = this.server.status;

  }

  public onUpdateServer() {

    this.serversService.updateServer(this.server.id,
      {name: this.serverName, status: this.serverStatus});

  }

}
