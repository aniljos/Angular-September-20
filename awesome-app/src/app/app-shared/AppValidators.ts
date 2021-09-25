import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class AppValidators{


    //function to validate a mobile no
    static mobile() : ValidatorFn{

        return (control: AbstractControl): ValidationErrors | null => {

            const value = control.value;
            const regEx = /[789][0-9]{9}/;
            const isValid = regEx.test(value);

            return isValid ? null : {"mobile": true}
        }
    }
}