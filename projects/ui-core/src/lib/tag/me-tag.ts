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
  selector: 'me-tag',
  imports: [],
  templateUrl: './me-tag.html',
  styleUrl: './me-tag.scss'
})
export class MeTag {
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
