import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Typography } from './typography';
import {provideZonelessChangeDetection} from '@angular/core';

describe('Typography', () => {
  let component: Typography;
  let fixture: ComponentFixture<Typography>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Typography],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Typography);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
