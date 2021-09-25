import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AppValidators} from '../../app-shared/AppValidators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formGroup: FormGroup;
  constructor(private appValidator: AppValidators) { 

    this.formGroup = new FormGroup({
      name: new FormControl("", [Validators.required, 
              Validators.minLength(3), AppValidators.forbiddenValues(["admin", "manager"])], 
                    [appValidator.uniqueValue()]),
      email: new FormControl("", [Validators.required, Validators.email]),
      mobile: new FormControl("", [Validators.required, AppValidators.mobile()])
    });

  }

  ngOnInit(): void {
  }

  save(){
    if(this.formGroup.valid){
      const user = {
        name: this.formGroup.get('name')?.value,
        email: this.formGroup.get('email')?.value,
        mobile: this.formGroup.get('mobile')?.value

      }
      console.log("User", user);
    }
    else{
      alert("Invalid");
    }
  }

}
