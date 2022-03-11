import { createAction, props } from "@ngrx/store";
import { Something } from './../../core/models/.somethinginterface';

export const action = createAction(
  '[Source] Event',
  props<{ param: any }>()
);

export const actionSuccess = createAction(
  '[source] Event Success',
  props<{ somethings: Something[] }>()
);

export const actionError = createAction(
  '[source] Event Error',
);
