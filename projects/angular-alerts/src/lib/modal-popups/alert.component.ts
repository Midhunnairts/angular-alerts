import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-alert',
  templateUrl: `./alert.component.html`,
  styleUrl: './alert.component.scss',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class AlertComponent {
  isVisible: boolean = false;
  modalClass: string = '';
  modalTitle: string = '';
  modalMessage: string = '';
  buttonClass: string = '';

  openModal(type: 'success' | 'error' | 'warning' | 'info') {
    this.isVisible = true;
    setTimeout(() => {
      document.querySelector('.modal')?.classList.add('show');
      document.querySelector('.modal-overlay')?.classList.add('show');
    }, 10); // Delay to trigger animation
    switch (type) {
      case 'success':
        this.modalClass = 'modal-success';
        this.modalTitle = 'Success';
        this.modalMessage = 'Operation completed successfully!';
        this.buttonClass = 'btn-success';
        break;
      case 'error':
        this.modalClass = 'modal-error';
        this.modalTitle = 'Error';
        this.modalMessage = 'An error occurred. Please try again.';
        this.buttonClass = 'btn-error';
        break;
      case 'warning':
        this.modalClass = 'modal-warning';
        this.modalTitle = 'Warning';
        this.modalMessage = 'Are you sure you want to proceed?';
        this.buttonClass = 'btn-warning';
        break;
      case 'info':
        this.modalClass = 'modal-info';
        this.modalTitle = 'Information';
        this.modalMessage = 'Here is some important information.';
        this.buttonClass = 'btn-info';
        break;
    }
  }

  closeModal() {
    this.isVisible = false;
    document.querySelector('.modal-overlay')?.classList.remove('show');
    setTimeout(() => {
      this.isVisible = false;
    }, 300);
  }
}
