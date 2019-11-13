import { Action } from '@ngrx/store';

export enum ActionTypes{
    LoadUsers="LoadUsers",
    SetUsers="SetUsers"
}
export class LoadUserAction implements Action{
    type= ActionTypes.LoadUsers
}

export class SetUserAction implements Action{
    type= ActionTypes.SetUsers;
    constructor(public payload:any[]){}
}