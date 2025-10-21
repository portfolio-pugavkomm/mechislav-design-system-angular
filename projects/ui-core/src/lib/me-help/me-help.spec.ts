import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeHelp } from './me-help';
import {provideZonelessChangeDetection} from '@angular/core';

describe('MeHelp', () => {
  let component: MeHelp;
  let fixture: ComponentFixture<MeHelp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeHelp],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeHelp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
