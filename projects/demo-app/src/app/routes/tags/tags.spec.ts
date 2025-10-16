import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tags } from './tags';
import {provideZonelessChangeDetection} from '@angular/core';

describe('Tags', () => {
  let component: Tags;
  let fixture: ComponentFixture<Tags>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tags],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tags);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
