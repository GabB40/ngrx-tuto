import { ActionReducerMap } from "@ngrx/store";
import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { exampleReducer } from "./reducers/example.reducer";
import { Something } from './../core/models/.somethinginterface';

export interface AppState {
    somethings: readonly Something[];
    router: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
    somethings: exampleReducer,
    router: routerReducer
};