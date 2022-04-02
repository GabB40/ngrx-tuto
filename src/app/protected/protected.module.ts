import { NgModule } from '@angular/core';

import { ProtectedRoutingModule } from './protected-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProtectedComponent } from './protected.component';
import { HomeComponent } from './home/home.component';
import { MyBooksComponent } from './my-books/my-books.component';

@NgModule({
  declarations: [
    ProtectedComponent,
    HomeComponent,
    MyBooksComponent
  ],
  imports: [
    SharedModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
