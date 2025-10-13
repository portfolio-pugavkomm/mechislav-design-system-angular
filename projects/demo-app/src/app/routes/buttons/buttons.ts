import { Component } from '@angular/core';
import {Button, ButtonSize} from 'ui-core';

@Component({
  selector: 'app-buttons',
  imports: [
    Button
  ],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss'
})
export class Buttons {
  buttonSizes: ButtonSize[] = ['s', 'm', 'l'];
}
