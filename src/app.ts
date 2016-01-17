import {Component}         from 'angular2/core';
import {PersonalDataForm} from './personalDataForm'
@Component({
  selector: 'app',
  template: '<personalDataForm></personalDataForm>',
  directives: [PersonalDataForm]
})
 
export class App {}