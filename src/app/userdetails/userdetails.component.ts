import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAppState, userSelector } from '../redux/app.store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.sass']
})
export class UserdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private store: Store<IAppState>) { }
  user: any;
  ngOnInit() {
    this.route.paramMap.subscribe((params: any)=>{
      console.log("params "+params.params.id);
      this.store.select(userSelector).subscribe((data: any[]) =>{
        this.user=data.find(d=>d.id==params.params.id);
        console.log("IN UserdetailsComponent "+JSON.stringify(this.user));
      });
    });
  }

}
