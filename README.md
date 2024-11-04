Angular Alert Library

A customizable alert library for Angular. This library enables you to create clean, responsive, and customizable alert popups for different alert types, including success, error, warning, and information.

Features
Customizable Icons: Choose from success, warning, error, or information icons.
Customizable Colors: Set colors for icons and buttons.
Animated Alerts: Supports smooth entry animations.
Backdrop Support: Display alerts with or without a backdrop.
Responsive Design: Alerts adjust seamlessly across screen sizes.
Confirmation and Cancel Buttons: Customize button text and behavior.

Table of Contents
Installation
Usage
Options
Customization
Examples

Installation
Install this repository in your Angular project:

npm i "https://github.com/Midhunnairts/angular-alerts#release/live"

Add the Component to your Angular project:

Add AlertComponent to your application module.

import { AlertComponent } from 'angular-alerts'

@NgModule({
  imports: [AlertComponent],
  ...
})
export class AppModule { }

Include in Your HTML:

Place the <lib-alert> component in your main AppComponent template (e.g., app.component.html).

<lib-alert></lib-alert>

Usage
Inject AlertService into your component and use showAlert to display the alert popup.

import { Component } from '@angular/core';
import { AlertService } from 'angular-alerts';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html'
})
export class SampleComponent {
  constructor(private alertService: AlertService) {}

  showAlert() {
    this.alertService.showAlert({
      title: 'Alert Title',
      text: 'This is an example alert message.',
      icon: 'success',
      iconColor: '#4CAF50',
      showConfirmButton: true,
      confirmButtonText: 'OK',
      showCancelButton: false,
      animation: true
    });
  }
}

Options
Below are the configurable options for creating alerts:

Option	Type	Default	Description
title	string	''	Title of the alert
text	string	''	Message text within the alert
icon	string	''	Icon type, accepts success, error, warning, info
iconColor	string	#4CAF50	Custom color for the icon
showConfirmButton	boolean	true	Display confirm button
confirmButtonText	string	'OK'	Text for the confirm button
showCancelButton	boolean	false	Display cancel button
cancelButtonText	string	'Cancel'	Text for the cancel button
animation	boolean	true	Enables smooth pop-up animation
backdrop	boolean	true	Shows background overlay; set false for no backdrop
Customization
To adjust the alert appearance, you can override the default SCSS styling in your global styles file.

Example SCSS Customizations
Modify Button Colors: Update the background color of the confirm button.

.alert-actions button.confirm-button {
  background-color: #28a745;
}

Icon Style Customization: Customize icon colors and size.

.alert-icon.success {
  color: #4CAF50;
  font-size: 3em;
}

Examples
Basic Success Alert:

this.alertService.showAlert({
  title: 'Success!',
  text: 'Your operation was successful!',
  icon: 'success',
  iconColor: 'green',
  showConfirmButton: true,
  confirmButtonText: 'Great!'
});

Warning Alert with Cancel Button:

typescript
Copy code
this.alertService.showAlert({
  title: 'Warning!',
  text: 'This action may have consequences.',
  icon: 'warning',
  iconColor: 'orange',
  showConfirmButton: true,
  confirmButtonText: 'Proceed',
  showCancelButton: true,
  cancelButtonText: 'Cancel'
});

License
This library is open-source and available for personal and commercial use.