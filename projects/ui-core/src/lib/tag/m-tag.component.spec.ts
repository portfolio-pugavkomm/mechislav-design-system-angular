import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTag } from './m-tag.component';
import {provideZonelessChangeDetection} from '@angular/core';

describe('Tag', () => {
  let component: MTag;
  let fixture: ComponentFixture<MTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MTag],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MTag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
