import { Control } from "angular2/common";

interface ValidationResult{
   [key:string]:boolean;
}

export class FormValidator {

    static startsWithNumber(control: Control): ValidationResult {     
      if ( control.value !="" && !isNaN(control.value.charAt(0)) ){
        return {"startsWithNumber": true};
      }    
      return null;
    }
    
    static hasWhiteSpace(control: Control): ValidationResult {     
      if ( control.value !="" && control.value.trim().indexOf(" ") > -1){
        return {"hasWhiteSpace": true};
      }    
      return null;
    }
}