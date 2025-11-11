import {Component, computed, contentChild, effect, signal, viewChild} from '@angular/core';
import {MeNavbar} from '../me-navbar';

@Component({
  selector: 'me-drawer-container',
  imports: [],
  styleUrl: './drawer.scss',
  templateUrl: './drawer-container.html',
})
export class MeDrawerContainer {
  protected _drawer = contentChild(MeDrawer);
  private _content = contentChild(MeDrawerContent);
  private _navBar = contentChild(MeNavbar);

  constructor() {
    effect(() => {
      if (this._navBar()) {
        this._drawer()?.containerHasNavbar.set(true);
      } else {
        this._drawer()?.containerHasNavbar.set(false);
      }
    })

    effect(() => {
        const drawer = this._drawer()
        if (drawer) {
          this._content()?.drawer.set(drawer)
        }
      }
    )
  }

  hasNavbar = computed(() => !!this._navBar())

  isDrawerOpen = computed(() => {
    console.info(this._drawer())
    return !!this._drawer()?.isOpen();
  });

  closeDrawer() {
    this._drawer()?.close();
  }

}

@Component({
  selector: 'me-drawer',
  imports: [],
  styleUrl: './drawer.scss',
  templateUrl: './drawer.html'
})
export class MeDrawer {
  private _isOpen = signal(false);
  public isOpen = this._isOpen.asReadonly();
  private _container = viewChild(MeDrawerContainer);

  containerHasNavbar = signal(false);

  public open() {
    this._isOpen.set(true);
  }

  public close() {
    this._isOpen.set(false);
  }

  public toggleDrawer() {
    console.info('Toggle drawer');
    this._isOpen.update(prev => !prev);
  }

}

@Component({
  selector: 'me-drawer-content',
  imports: [],
  styleUrl: './drawer.scss',
  templateUrl: './drawer-content.html',
  host: {
    'class': 'me-drawer-content',
    '[class.show]': 'drawer()?.isOpen()',
  }
})
export class MeDrawerContent {
  readonly drawer = signal<MeDrawer | null>(null);
}


