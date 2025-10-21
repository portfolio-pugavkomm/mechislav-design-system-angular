import {Component} from '@angular/core';
import {MeButtonDirective, MeField, MeHelp, MeInputDirective, MeLabel} from "ui-core";
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [MeField, MeHelp, MeLabel, MeInputDirective, MeButtonDirective, ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss'
})
export class LoginForm {
  private _formBuilder = new FormBuilder();

  formGroup = this._formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
}
