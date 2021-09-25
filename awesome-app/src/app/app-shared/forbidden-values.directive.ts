import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { AppValidators } from './AppValidators';


// <input appForbiddenValues="abc,xyz,aa" /> 
@Directive({
  selector: '[appForbiddenValues]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValuesDirective, multi: true}]
})
export class ForbiddenValuesDirective implements Validator{

  @Input() public appForbiddenValues: string = ""
  constructor() { }


  validate(control: AbstractControl): ValidationErrors | null {

    //const value = control.value;
    const values = this.appForbiddenValues.split(",");

    return AppValidators.forbiddenValues(values)(control);
  }

}
