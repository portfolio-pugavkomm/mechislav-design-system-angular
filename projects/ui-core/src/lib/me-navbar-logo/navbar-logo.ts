import {Component, input} from '@angular/core';

export type logoSize = 'mobile' | 'desktop' | 'adaptive';

@Component({
  selector: 'me-navbar-logo',
  imports: [],
  templateUrl: './navbar-logo.html',
  styleUrl: './navbar-logo.scss',
  host: {
    'class': 'logo',
    '[class]': 'logoSize()',
  }
})
export class NavbarLogo {
  readonly logoSize = input.required<logoSize>()
}
