import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  
    @Input("user") user: Object;

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}
