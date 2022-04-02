import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'loggin',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'my-space',
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule)
  },
  { path: '', redirectTo: 'loggin', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
