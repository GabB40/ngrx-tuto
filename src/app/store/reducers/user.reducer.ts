import { createReducer, on } from '@ngrx/store';
import { User } from './../../core/models/user.interface';
import { setUser } from './../actions/user.actions';

export const userFeatureKey = 'user';

export const initialState: User = {};

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => user)
);
