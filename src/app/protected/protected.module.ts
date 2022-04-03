import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ConnectionRequiredComponent } from './connection-required/connection-required.component';
import { HomeComponent } from './home/home.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedComponent } from './protected.component';


@NgModule({
  declarations: [
    ProtectedComponent,
    HomeComponent,
    MyBooksComponent,
    ConnectionRequiredComponent
  ],
  imports: [
    SharedModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
