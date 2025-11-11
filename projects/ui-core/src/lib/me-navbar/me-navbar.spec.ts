import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeNavbar } from './me-navbar';
import {provideZonelessChangeDetection} from '@angular/core';

describe('MeNavbar', () => {
  let component: MeNavbar;
  let fixture: ComponentFixture<MeNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeNavbar],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
