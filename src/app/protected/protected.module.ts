import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { BookEffects } from './../store/effects/book.effects';
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
    ProtectedRoutingModule,
    EffectsModule.forFeature([BookEffects])
  ]
})
export class ProtectedModule { }
