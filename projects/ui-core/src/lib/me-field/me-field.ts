import {Component, computed, contentChild, effect} from '@angular/core';
import {MeInput} from '../me-input';
import {NgTemplateOutlet} from '@angular/common';
import {MeLabel} from '../me-label';
import {MeHelp} from '../me-help';


/**
 * Simple index generator
 *
 * This generator only increments index values. It's currently
 * implemented as the simplest way to create a unique index.
 */

@Component({
  selector: 'me-field',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './me-field.html',
  styleUrl: './me-field.scss'
})
export class MeField {

  private static nextMeFieldIndex = 0; // Index counter
  private static generateUniqueIndex = (): number => {
    return MeField.nextMeFieldIndex++;
  }
  /**
   * Reference to input field
   *
   */
  private readonly inputRef = contentChild.required(MeInput);

  /**
   * Reference to label
   *
   */
  private readonly labelRef = contentChild(MeLabel);

  /**
   * Reference to help for field
   *
   */
  private readonly helpRef = contentChild(MeHelp);

  /**
   * Unique field index
   */
  private readonly uniqueId = `me-field-${MeField.generateUniqueIndex()}`



  /**
   * If input is required, returns true, otherwise false.
   */
  isInputRequired = computed<boolean>(() => {
    const input = this.inputRef();
    return input.required();
  })

  constructor() {
    effect(() => {
      const input = this.inputRef();
      const label = this.labelRef();
      const help = this.helpRef();

      const inputId = input.id() || this.uniqueId;
      input._controlledId.set(inputId);

      if (label) {
        label._controlledFor.set(inputId)
      }

      if (help) {
        const helpId = `help-${inputId}`
        help._controlledId.set(helpId)
        input._controllerAriaDescribeBy.set(helpId)
      } else {
        input._controllerAriaDescribeBy.set(null);
      }
    })
  }
}
