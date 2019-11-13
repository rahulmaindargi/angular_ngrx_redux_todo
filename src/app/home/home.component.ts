import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IAppState, getIAppState, userSelector } from '../redux/app.store';
import { Observable } from 'rxjs';
import { Store, createSelector, select } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  clicked:boolean = false;
  users: Observable<any[]>;
  constructor(private data: DataService,private store: Store<IAppState>) {
     this.users=store.select(userSelector);
   }

  ngOnInit() {
    this.users.subscribe(us=>console.log(" Store works "+JSON.stringify(us)));
  }

  clickedEvent(){
    this.data.getUsers();
    this.clicked=this.data.toggle(this.clicked);
  }
}
