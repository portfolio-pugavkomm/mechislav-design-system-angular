import {Component, HostBinding, input} from '@angular/core';

/**
 * Tag size like text size variants
 */
export type TagSize = 's' | 'm' | 'xl' | 'xxl';

/**
 * Tag color variant
 */
export type TagVariant = 'primary' | 'secondary' | 'info' | 'warning' | 'danger';

/**
 * Text inside border
 *
 */
@Component({
  selector: 'm-tag',
  imports: [],
  templateUrl: './m-tag.component.html',
  styleUrl: './m-tag.component.scss'
})
export class MTag {
  /**
   * Tag size
   */
  size = input<TagSize>('xxl');
  /**
   * Tag color variant
   */
  variant = input<TagVariant>('primary');

  @HostBinding('class')
  get hostClasses(): string {
    return [
      'm-tag',
      `m-tag--${this.size()}`,
      `m-tag--${this.variant()}`
    ].join(' ')
  }
}
