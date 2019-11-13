import { IAppState } from './app.store';
import { Action, ActionReducerMap } from '@ngrx/store';
import { SetUserAction, ActionTypes, LoadUserAction } from './app.action';
import { Effect, Actions , ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
export const rootReducerMap: ActionReducerMap<IAppState>={
     users: userReducers
 }
  
function userReducers(state: any[]=[], action:Action): any[]{
    switch(action.type){
        case ActionTypes.SetUsers:
            let a=action as SetUserAction
            console.log(a.payload);
            return a.payload;
    }
    return state;
}
@Injectable()
export class UserEffects{
constructor(private actions$: Actions, private data:HttpClient){}

@Effect()
loadUsers$=this.actions$.pipe(ofType(ActionTypes.LoadUsers),
switchMap((action: LoadUserAction)=> this.data.get("https://reqres.in/api/users")
    .pipe(map((res: any)=>new SetUserAction(res.data)))
    )
);

}
