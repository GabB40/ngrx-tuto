import { Something } from './../../core/models/.somethinginterface';
import { createReducer, on } from "@ngrx/store";
import { actionSuccess } from '../actions/example.action';

export const initialState: readonly Something[] = [];

export const exampleReducer = createReducer(
    initialState,
    on(actionSuccess, (state, { somethings }) => somethings),
);