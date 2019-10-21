import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  // @ts-ignore
  ngOnInit() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email : new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required )
      }),

      gender: new FormControl('female'),
      hobbies: new FormArray([])
    });
  }
  OnSubmit() {
    console.log(this.signUpForm);
  }
  OnAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
}



