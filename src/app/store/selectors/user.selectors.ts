import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from './../../core/models/user.interface';
import { userFeatureKey } from './../reducers/user.reducer';

export const selectUserState = createFeatureSelector<User>(userFeatureKey);

export const selectUserIsLoggedIn = createSelector(
    selectUserState,
    user => !!user?.id
)

