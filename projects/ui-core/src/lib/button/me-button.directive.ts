import {Directive, HostBinding, input} from '@angular/core';

/**
 * One of button variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'linked' | 'canceled';

/**
 * Button size
 */
export type ButtonSize = 's' | 'm' | 'l'; // small, medium (default), large

@Directive({
  selector: 'button[meButton], a[meButton]',
  standalone: true,
})
export class MeButtonDirective {
  /**
   * Disable button
   */
  disabled = input<boolean>(false);

  /**
   * Button variant
   */
  variant = input<ButtonVariant>('primary');

  /**
   * Button size
   */
  size = input<ButtonSize>('m');

  @HostBinding('class')
  get hostClasses(): string {
    return [
      'me-button',
      `me-button--${this.variant()}`,
      `me-button--${this.size()}`,
    ].join(' ');
  }

  @HostBinding('attr.aria-disabled')
  @HostBinding('disabled')
  get isDisabled(): boolean {
    return this.disabled();
  }
}
