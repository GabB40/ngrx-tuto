import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LogginComponent } from './loggin/loggin.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [
    PublicComponent,
    LogginComponent
  ],
  imports: [
    SharedModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
