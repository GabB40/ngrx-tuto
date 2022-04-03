import { ActionReducerMap } from "@ngrx/store";
import { Book } from './../core/models/book.interface.';
import { User } from './../core/models/user.interface';
import { bookReducer } from './reducers/book.reducer';
import { helloWorldReducer } from './reducers/hello-world.reducer';
import { userReducer } from './reducers/user.reducer';

export interface AppState {
    helloWorld: string;
    books: Book[];
    user: User;
}

export const reducers: ActionReducerMap<AppState> = {
    helloWorld: helloWorldReducer,
    books: bookReducer,
    user: userReducer,
};