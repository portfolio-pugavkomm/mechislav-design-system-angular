import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeTag } from './me-tag';
import {provideZonelessChangeDetection} from '@angular/core';

describe('Tag', () => {
  let component: MeTag;
  let fixture: ComponentFixture<MeTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeTag],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeTag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
