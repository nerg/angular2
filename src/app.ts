import { Component } from 'angular2/core';
import {
	FormBuilder,
	Validators,
	Control,
	ControlGroup,
	FORM_DIRECTIVES
} from 'angular2/common';

import { FormValidator } from './FormValidator.ts'

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'app',
  // Location of the template for this component
  templateUrl: 'src/personalDataForm.html',
  directives: [FORM_DIRECTIVES]
})

export class App {
    
    birthDate: string = '';
    civilStatus: string = '';
    
    civilStatusControl = new Control(
        this.civilStatus,
        Validators.compose([Validators.required, FormValidator.startsWithNumber, FormValidator.hasWhiteSpace])
    );
    
    birthDateControl = new Control(
        this.birthDate,
        Validators.compose([Validators.required, FormValidator.startsWithNumber, FormValidator.hasWhiteSpace])
    );

    formGroup: ControlGroup = new ControlGroup({
      birthDateControl: this.birthDateControl,
      civilStatusControl: this.civilStatusControl
    });
};