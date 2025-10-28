import {Component, signal} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {MeButton} from 'ui-core';

interface LinkItem {
  label: string;
  url: string;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MeButton,
    RouterModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo-app');
  protected readonly links = signal<LinkItem[]>([
    {label: 'Buttons', url: 'buttons'},
    {label: 'Tags', url: 'tags'},
    {label: 'Typography', url: 'typography'},
    {label: 'Inputs', url: 'inputs'},
  ])

}
