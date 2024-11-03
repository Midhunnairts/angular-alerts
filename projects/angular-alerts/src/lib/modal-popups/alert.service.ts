// src/app/alert.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AlertOptions } from './alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertOptions$ = new BehaviorSubject<AlertOptions | null>(null);

  showAlert(options: AlertOptions) {
    this.alertOptions$.next(options);
  }

  closeAlert() {
    this.alertOptions$.next(null);
  }

  getAlertOptions() {
    return this.alertOptions$.asObservable();
  }
}
