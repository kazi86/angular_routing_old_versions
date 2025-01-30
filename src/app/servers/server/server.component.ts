import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  public server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private route:ActivatedRoute) { }

  public ngOnInit() {

    this.route.params.subscribe({
      next:(result:Params)=>{

      this.server = this.serversService.getServer(+result['id']);

    }
    });

  }

}
