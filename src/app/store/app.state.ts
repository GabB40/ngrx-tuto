import { Book } from './../core/models/book.interface.';
import { bookReducer } from './reducers/book.reducer';
import { ActionReducerMap } from "@ngrx/store";
import { routerReducer, RouterReducerState } from "@ngrx/router-store";

export interface AppState {
    books: readonly Book[];
    router: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
    books: bookReducer,
    router: routerReducer
};