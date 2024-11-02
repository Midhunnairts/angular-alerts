import { NgModule } from '@angular/core';
import { AlertComponent } from './alert.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:[
    AlertComponent

  ],
  exports: [AlertComponent],
})
export class AlertPopupModule { }
