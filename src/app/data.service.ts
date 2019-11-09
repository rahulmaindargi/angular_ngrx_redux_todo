import { Injectable } from '@angular/core';
import { Component } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';
import { IAppState } from './redux/app.store';
import { NgRedux } from '@angular-redux/store';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private data:HttpClient, private store: NgRedux<IAppState>) { }

  toggle(val: boolean ){
    return !val;
  }
  getUsers(){
    this.data.get("https://reqres.in/api/users").subscribe((users:any)=>this.store.dispatch({type: "LoadUsers", data: users.data}));
    //return this.data.get("https://reqres.in/api/users");
  }
}
