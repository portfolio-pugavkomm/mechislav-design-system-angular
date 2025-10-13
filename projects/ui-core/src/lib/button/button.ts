import {Component, HostBinding, input} from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'linked' | 'canceled';
export type ButtonSize = 's' | 'm' | 'l'; // small, medium (default), large

@Component({
  selector: 'm-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  disabled = input<boolean>(false);
  variant = input<ButtonVariant>('primary')
  size = input<ButtonSize>('m')

  @HostBinding('class')
  get hostClasses(): string {
    return [
      'm-button',
      `m-button--${this.variant()}`,
      `m-button--${this.size()}`
    ].join(' ');
  }

  @HostBinding('attr.aria-disabled')
  get isDisabled(): boolean {
    return this.disabled();
  }

}
