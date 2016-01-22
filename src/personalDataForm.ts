import { Component } from 'angular2/core';
import { FormValidator } from './formValidator';
import {
	FORM_DIRECTIVES,
	FormBuilder,
	ControlGroup,
  Validators,
  AbstractControl
} from 'angular2/common';

@Component({
  selector: 'personalDataForm',
  directives: [FORM_DIRECTIVES],
  templateUrl: 'src/personalDataForm.html'
})

export class PersonalDataForm {    
    
    // variables du formulaire
    formGroup: ControlGroup;
    birthdate: AbstractControl;
    civilstatus: AbstractControl;
    nationality: AbstractControl;
    retireage: AbstractControl;
    birthdatePartner: AbstractControl;
    
    // listes des selectbox
    civilstatusList = ['Célibataire', 'Marié', 'Divorcé', 'Veuve/Veuf'];
    nationalityList = ['Suisse', 'Français', 'Allemand', 'Islandais'];
    retireageList   = ['Age légal (65 ans)', 'Anticipé 1 (64 ans)', 'Anticipé 2 (63 ans)', 'Ajourné 1 (66 ans)', 'Ajourné 2 (67 ans)'];
    
    constructor(fb: FormBuilder) {
      this.formGroup = fb.group({        
        'birthdate': ['', Validators.compose([Validators.required, FormValidator.isNotDate])],
        'birthdatePartner': ['', FormValidator.isNotDate],
        'civilstatus': ['Célibataire'],
        'nationality': ['Suisse'],
        'retireage' : ['Age légal (65 ans)']
      });
      
      this.civilstatus = this.formGroup.controls['civilstatus'];
      this.nationality = this.formGroup.controls['nationality'];
      this.retireage = this.formGroup.controls['retireage'];
      this.birthdatePartner = this.formGroup.controls['birthdatePartner'];
      this.birthdate = this.formGroup.controls['birthdate'];
      
      // listener
      /*this.birthdate.valueChanges.subscribe(
        (value: string) => {
          console.log('sku changed to: ', value);
        }
      );*/
    }

    onSubmit(value: string): void {
      console.log('résultat du formulaire: ', value);
    }
}