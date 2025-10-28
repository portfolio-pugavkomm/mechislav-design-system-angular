import {Component} from '@angular/core';
import {MeField, MeHelp, MeInput, MeLabel} from 'ui-core';
import {LoginForm} from './components/login-form/login-form';

@Component({
  selector: 'app-inputs',
  imports: [MeField, MeLabel, MeHelp, LoginForm, MeInput],

  templateUrl: './inputs.html',
  styleUrl: './inputs.scss'
})
export class Inputs {

}
