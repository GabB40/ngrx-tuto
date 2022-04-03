import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgxBootstrapModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
  ],
  entryComponents: []
})
export class SharedModule { }
