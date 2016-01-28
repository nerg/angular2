import {Component}        from 'angular2/core';
import {PersonalDataForm} from './personalDataForm';
import {Slider} from './slider';
@Component({
  selector: 'app',
  template: '<personalDataForm></personalDataForm><slider></slider>',
  directives: [PersonalDataForm, Slider]
})
 
export class App {}