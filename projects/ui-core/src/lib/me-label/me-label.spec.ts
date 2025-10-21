import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeLabel } from './me-label';
import {provideZonelessChangeDetection} from '@angular/core';

describe('MeLabel', () => {
  let component: MeLabel;
  let fixture: ComponentFixture<MeLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeLabel],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeLabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
