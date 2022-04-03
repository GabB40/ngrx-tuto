import { createAction, props } from '@ngrx/store';
import { User } from './../../core/models/user.interface';

export const setUser = createAction(
  '[Loggin] Set User',
  props<{ user: User }>()
);




