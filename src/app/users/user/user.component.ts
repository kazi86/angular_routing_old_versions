import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  public user: {id: number, name: string};

  public paramsSubscription:Subscription;

  constructor(private route : ActivatedRoute) { }

  public ngOnInit() {

    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['user-name']
    }

    this.paramsSubscription = this.route.params.subscribe({
      next:(params:Params)=>{
      this.user.id = params['id'];
      this.user.name = params['user-name'];
    }
    });

  }

  public ngOnDestroy()  {

    this.paramsSubscription.unsubscribe();

  }

}
