import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface IAppState{
    users?: any[]
}

export const getIAppState = createFeatureSelector<IAppState>(
    'appState'
);
export const userSelector=createSelector(getIAppState, (state: IAppState)=>state.users);