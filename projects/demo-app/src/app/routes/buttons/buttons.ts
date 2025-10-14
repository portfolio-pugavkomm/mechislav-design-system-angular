import {Component, signal} from '@angular/core';
import {MButton, ButtonSize, ButtonVariant} from 'ui-core';

@Component({
  selector: 'app-buttons',
  imports: [MButton],
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
