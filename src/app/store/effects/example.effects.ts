// import { Injectable } from "@angular/core";
// import { catchError, map, of, switchMap } from "rxjs";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { action, actionSuccess, actionError } from '../actions/example.action';
// import { ExampleService } from '../../core/services/example.service';

// @Injectable()
// export class ExampleEffects {

//     action$ = createEffect(() => this.actions$.pipe(
//         ofType(action),
//         switchMap(action => this.exampleService.getSomething(action.param).pipe(
//             map(somethings => actionSuccess({somethings})),
//             catchError(() => of(actionError()))
//         ))
//     ));

//     constructor(
//         private actions$: Actions,
//         private exampleService: ExampleService,
//     ) { }
// }