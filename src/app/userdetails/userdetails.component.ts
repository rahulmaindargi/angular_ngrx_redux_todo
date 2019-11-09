import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../redux/app.store';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.sass']
})
export class UserdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private state: NgRedux<IAppState>) { }
  user: any;
  ngOnInit() {
    
    this.route.paramMap.subscribe((params: any)=>{
      console.log("params "+params.params.id);
      this.state.select("users").subscribe((data: any[]) =>{
        this.user=data.find(d=>d.id==params.params.id);
        console.log("IN UserdetailsComponent "+JSON.stringify(this.user));
      });
    });
    
  }

}
