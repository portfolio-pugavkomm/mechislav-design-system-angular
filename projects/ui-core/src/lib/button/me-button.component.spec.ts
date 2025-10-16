import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEButton } from './me-button.component';

describe('MEButton', () => {
  let component: MEButton;
  let fixture: ComponentFixture<MEButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MEButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MEButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
