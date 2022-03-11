import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Something } from '../../core/models/.somethinginterface';

export const featureSelectSomething = createFeatureSelector<Something>('something');

export const selectSomething = createSelector(
    featureSelectSomething,
    something => something
)