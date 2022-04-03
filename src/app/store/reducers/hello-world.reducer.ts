import { createReducer } from '@ngrx/store';

export const initialState: string = 'Hello World :)';

export const helloWorldReducer = createReducer(
  initialState
);
