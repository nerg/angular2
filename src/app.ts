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
    civilStatus = ['Celibataire', 'Marie', 'Divorcé'];
    nationality = ['Suisse', 'France', 'Allemagne'];
    kids = [1,2,3,4,5,6,7,8,9];
    retireAge = ['2 ans avant l\'âge de la retraite légal', 'âge de la retraite légal'];
    
    birthDateControl = new Control(
        this.birthDate,
        Validators.compose([Validators.required, FormValidator.isNotDate])
    );

    formGroup: ControlGroup = new ControlGroup({
      birthDateControl: this.birthDateControl
      //, civilStatusControl: this.civilStatusControl
    });
};