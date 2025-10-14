import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTag } from './m-tag.component';

describe('Tag', () => {
  let component: MTag;
  let fixture: ComponentFixture<MTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MTag]
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
