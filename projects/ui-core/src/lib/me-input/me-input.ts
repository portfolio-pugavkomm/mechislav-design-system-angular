import {booleanAttribute, computed, Directive, ElementRef, inject, input, signal} from '@angular/core';

@Directive({
  selector: 'input[meInput]',
  standalone: true,
  host: {
    class: 'me-input',
    '[attr.id]': 'actualId()',
    '[attr.required]': 'required() ? true : null',
    '[attr.aria-disabled]': 'disabled()',
    '[attr.aria-describedby]': 'actualAriaDescribeBy()',
    '[attr.disabled]': 'disabled() ? true : null',
  }
})
export class MeInput {
  readonly elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);

  /**
   * The id of the input field.
   */
  id = input<string | null>(null);
  readonly _controlledId = signal<string | null>(null);
  readonly actualId = computed(() => this._controlledId() ?? this.id())

  /**
   * Ids of the elements that describe this input field.
   */
  ariaDescribeBy = input<string | null>(null);
  _controllerAriaDescribeBy = signal<string | null>(null);
  actualAriaDescribeBy = computed(() => this._controllerAriaDescribeBy() ?? this.ariaDescribeBy());

  /**
   * Disable input
   */
  disabled = input(false, {transform: booleanAttribute});

  /**
   * Whether the input is required.
   */
  required = input(false, {
    transform: booleanAttribute
  });

  /**
   * Getter for check required or not this input field
   */
  public get requiredGetter(): boolean {
    return this.elementRef.nativeElement.required;
  }
}
