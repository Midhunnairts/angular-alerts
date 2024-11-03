import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AlertOptions } from './alert.model';
import { AlertService } from './alert.service';

@Component({
  selector: 'lib-alert',
  templateUrl: `./alert.component.html`,
  styleUrl: './alert.component.scss',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class AlertComponent implements OnInit{
  alertOptions: AlertOptions | null = null;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.getAlertOptions().subscribe((options) => {
      this.alertOptions = options;
    });
  }

  confirm() {
    this.alertService.closeAlert();
  }

  cancel() {
    this.alertService.closeAlert();
  }
}
