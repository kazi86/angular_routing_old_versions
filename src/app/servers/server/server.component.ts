import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  public server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private route:ActivatedRoute,private router:Router) { }

  public ngOnInit() {

    this.route.params.subscribe({
      next:(result:Params)=>{

      this.server = this.serversService.getServer(+result['id']);

    }
    });

  }

  public onEdit(serverId:number){

    // current localhost:4200/servers/:id
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'}); //we navigate relative to the current path.
                                                                            // by attaching to the current path 'edit'.

  }

}
