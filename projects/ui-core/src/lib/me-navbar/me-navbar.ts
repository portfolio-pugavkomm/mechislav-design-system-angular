import {Component, input} from '@angular/core';

@Component({
  selector: 'me-navbar',
  imports: [],
  templateUrl: './me-navbar.html',
  styleUrl: './me-navbar.scss',
  host: {
    '[animate.enter]': 'enterClass()',
    '[animate.leave]': 'leaveClass()',
  }
})
export class MeNavbar {
  readonly enterClass = input<string>('fade-in');
  readonly leaveClass = input<string>('fade-out');
}
