import { Injectable } from '@angular/core';
import { Component } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';
import { IAppState } from './redux/app.store';
import { Store } from '@ngrx/store';
import { LoadUserAction } from './redux/app.action';
//const fs = require('fs');

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private data:HttpClient, private store: Store<IAppState>) { }

  toggle(val: boolean ){
    return !val;
  }
  getUsers(){
    this.store.dispatch(new LoadUserAction());
    //this.data.get("https://reqres.in/api/users").subscribe((users:any)=>this.store.dispatch({type: "LoadUsers", data: users.data}));
    //return this.data.get("https://reqres.in/api/users");
    this.data.get('assets/text.txt', {responseType: 'text'}).subscribe(data => console.log(data))
    //this.data.get('assets').subscribe(data => console.log(data))
    // fs.readdir('assets', (err, files) => {
    //   files.forEach(file => {
    //     console.log(file); // use those file and return it as a REST API
    //   });
    // })
    
  }
}
