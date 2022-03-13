import { RouterState } from './routerSerializer';
import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

export const selectRouter = createFeatureSelector<RouterReducerState<RouterState>>('router');

export const selectRouterState = createSelector(
    selectRouter,
    (router) =>  router.state
)

export const selectRouterUrl = createSelector(
  selectRouterState,
  (state) => state.url
)