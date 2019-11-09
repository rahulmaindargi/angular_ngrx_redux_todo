import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgRedux, select$, select } from '@angular-redux/store';
import { IAppState } from '../redux/app.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  clicked:boolean = false;
  @select() users: Observable<any[]>;
  constructor(private data: DataService,private state: NgRedux<IAppState>) { }

  ngOnInit() {
    this.users.subscribe(us=>console.log(" Store works "+JSON.stringify(us)));
  }

  clickedEvent(){
    this.data.getUsers();
    this.clicked=this.data.toggle(this.clicked);
  }
}
