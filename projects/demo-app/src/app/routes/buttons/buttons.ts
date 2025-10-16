import {Component, signal} from '@angular/core';
import type {ButtonSize, ButtonVariant} from 'ui-core';
import { MeButtonDirective} from 'ui-core';

@Component({
  selector: 'app-buttons',
  imports: [MeButtonDirective],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss'
})
export class Buttons {
  buttonSizes: ButtonSize[] = ['s', 'm', 'l'];
  protected readonly buttonVariants = signal<ButtonVariant[]>([
    'primary',
    'secondary',
    'linked',
    'canceled',
  ]);
}
