import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AppValidators{

    constructor(private http: HttpClient){

    }

    //function to validate a mobile no
    static mobile() : ValidatorFn{

        return (control: AbstractControl): ValidationErrors | null => {

            const value = control.value;
            const regEx = /[789][0-9]{9}/;
            const isValid = regEx.test(value);

            return isValid ? null : {"mobile": true}
        }
    }

    static forbiddenValues(values: Array<string>) : ValidatorFn{

        return (control: AbstractControl): ValidationErrors | null => {

            const value = control.value;
            return values.includes(value) ? {forbiddenValues: true} : null;
        }

    }

    //async validation
    uniqueValue(): AsyncValidatorFn{

        return (control: AbstractControl): Observable<ValidationErrors | null> => {

            var url = "http://localhost:9000/unique/" + control.value;
            return this.http
                        .get<{exists: boolean}>(url)
                        .pipe(
                            map(data => data.exists === true ? {uniqueValue: true} : null)
                        );

        }

    }
}