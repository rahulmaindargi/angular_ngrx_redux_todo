import { ReducersMapObject } from "redux";
import { IAppState } from './app.store';

 export const rootReducerMap: ReducersMapObject<IAppState>={
     users: userReducers
 }

  
function userReducers(state: any[]=[], action:any): any[]{
    switch(action.type){
        case "LoadUsers":
            console.log(action.data);
            return action.data;
    }
    return state;
}
