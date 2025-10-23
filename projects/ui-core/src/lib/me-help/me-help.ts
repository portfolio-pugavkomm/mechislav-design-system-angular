import {Component, computed, input, signal} from '@angular/core';

@Component({
  selector: 'me-help',
  imports: [],
  templateUrl: './me-help.html',
  styleUrl: './me-help.scss',
  host: {
    '[attr.id]': 'actualId()'
  }
})
export class MeHelp {
  id = input<string | null>(null);
  readonly _controlledId = signal<string | null>(null);
  actualId = computed(() => this._controlledId() ?? this.id());
}
