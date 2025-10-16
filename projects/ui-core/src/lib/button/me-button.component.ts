import {Component} from '@angular/core';
import {MeButtonDirective} from './me-button.directive';

@Component({
  selector: 'me-button',
  imports: [],
 hostDirectives: [
    {
      directive: MeButtonDirective,
      inputs: ['disabled', 'variant', 'size'],
    },
  ],

  templateUrl: './me-button.component.html',
  styleUrl: './_me-button.component.scss'
})
export class MEButton {

}
