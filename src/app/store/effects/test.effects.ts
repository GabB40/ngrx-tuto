import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';



@Injectable()
export class TestEffects {

  effect$ = createEffect(() => this.actions$.pipe());

  constructor(private actions$: Actions) {}

}
