import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxBootstrapModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  entryComponents: []
})
export class SharedModule { }
