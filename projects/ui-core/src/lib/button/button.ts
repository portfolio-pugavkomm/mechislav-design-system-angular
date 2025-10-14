import {Component, HostBinding, input} from '@angular/core';

/**
 * One of button variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'linked' | 'canceled';

/**
 * Button size
 */
export type ButtonSize = 's' | 'm' | 'l'; // small, medium (default), large

@Component({
  selector: 'm-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {

  /**
   * Disable button
   *
   */
  disabled = input<boolean>(false);

  /**
   * Button variant
   */
  variant = input<ButtonVariant>('primary')

  /**
   * Button size
   */
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
