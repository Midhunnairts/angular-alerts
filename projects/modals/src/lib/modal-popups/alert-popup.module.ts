import { NgModule } from '@angular/core';
import { AlertComponent } from './alert.component';
import { CommonModule } from '@angular/common';

@NgModule({
//   declarations: [
//     AlertComponent
//   ],
  imports:[
    // CommonModule,
    AlertComponent

  ],
  exports: [AlertComponent],
})
export class AlertPopupModule { }
