import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MButton } from './m-button.component';

describe('Button', () => {
  let component: MButton;
  let fixture: ComponentFixture<MButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
