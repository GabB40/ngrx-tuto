import { Something } from '../../core/models/something.interface';
import { createReducer, on } from "@ngrx/store";
import { actionSuccess } from '../actions/example.action';

export const initialState: readonly Something[] = [{prop: '1st something'}, {prop: '2nd something'}];

export const exampleReducer = createReducer(
    initialState,
    on(actionSuccess, (state, { somethings }) => somethings),
);