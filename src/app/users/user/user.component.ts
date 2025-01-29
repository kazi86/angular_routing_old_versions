import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user: {id: number, name: string};

  constructor(private route : ActivatedRoute) { }

  public ngOnInit() {

    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['user-name']
    }

  }

}
