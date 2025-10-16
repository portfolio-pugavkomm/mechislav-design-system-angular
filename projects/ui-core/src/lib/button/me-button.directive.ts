import {Directive, ElementRef, inject, input, signal} from '@angular/core';

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
  host: {
    'class': 'me-button',
    '[class.me-button--primary]': 'variant() === "primary"',
    '[class.me-button--secondary]': 'variant() === "secondary"',
    '[class.me-button--linked]': 'variant() === "linked"',
    '[class.me-button--canceled]': 'variant() === "canceled"',
    '[class.me-button--s]': 'size() === "s"',
    '[class.me-button--m]': 'size() === "m"',
    '[class.me-button--l]': 'size() === "l"',
    '[attr.aria-disabled]': 'disabled()',
    '[attr.disabled]': 'isButton() && disabled() ? "" : null',
    '(click)': 'handleClick($event)'
  }
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

  protected readonly isButton = signal<boolean | undefined>(undefined);


  constructor() {
    const elem = inject(ElementRef).nativeElement as HTMLElement;
    this.isButton.set(elem.tagName === 'BUTTON');
  }

  /**
   * Prevent the default action while disabled
   *
   * It can be used for <button or <a tags
   *
   * @param event
   */
  handleClick(event: Event): void {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
    }
  }


}
