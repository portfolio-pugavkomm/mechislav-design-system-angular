import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarLogo} from './navbar-logo';
import {provideZonelessChangeDetection} from '@angular/core';

describe('NavbarLogo', () => {
  let component: NavbarLogo;
  let fixture: ComponentFixture<NavbarLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarLogo],
      providers: [provideZonelessChangeDetection()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarLogo);
    component = fixture.componentInstance;
  });

  it('should create with initial logoSize', () => {
    const host: HTMLElement = fixture.nativeElement;
    fixture.componentRef.setInput('logoSize', 'mobile');
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(host.classList.contains('mobile'))
  });

  it('should change class by logoSize', () => {
    const host: HTMLElement = fixture.nativeElement;
    fixture.componentRef.setInput('logoSize', 'mobile');
    fixture.detectChanges();
    expect(host.classList.contains("mobile"));

    fixture.componentRef.setInput('logoSize', 'desktop');
    fixture.detectChanges();
    expect(host.classList.contains('desktop'));
  });
});
