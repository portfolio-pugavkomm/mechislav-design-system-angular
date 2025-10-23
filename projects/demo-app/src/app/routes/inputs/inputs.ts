import {Component} from '@angular/core';
import {MeButtonDirective, MeField, MeHelp, MeInputDirective, MeLabel} from 'ui-core';
import {LoginForm} from './components/login-form/login-form';

@Component({
  selector: 'app-inputs',
  imports: [MeInputDirective, MeField, MeButtonDirective, MeLabel, MeHelp, LoginForm],

  templateUrl: './inputs.html',
  styleUrl: './inputs.scss'
})
export class Inputs {

}
