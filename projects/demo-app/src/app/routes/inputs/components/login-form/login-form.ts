import {Component} from '@angular/core';
import {MeButton, MeField, MeHelp, MeInput, MeLabel} from "ui-core";
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [MeField, MeHelp, MeLabel, ReactiveFormsModule, MeButton, MeInput],
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
