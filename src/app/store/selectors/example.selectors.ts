import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Something } from '../../core/models/something.interface';

export const selectSomething = createFeatureSelector<Something[]>('somethings');

export const select1stSomething = createSelector(
    selectSomething,
    (state: Something[]) => state[0] ?? null
)