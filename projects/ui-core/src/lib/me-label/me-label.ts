import {Component, computed, input, signal} from '@angular/core';

@Component({
  selector: 'me-label',
  imports: [],
  templateUrl: './me-label.html',
  styleUrl: './me-label.scss',
})
export class MeLabel {
  for = input<string | null>(null);
  readonly _controlledFor = signal<string | null>(null);
  actualFor = computed(() => this._controlledFor() ?? this.for());
}
