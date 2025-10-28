import {Component, provideZonelessChangeDetection} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MeButton } from './me-button';

@Component({
  standalone: true,
  imports: [MeButton],
  template: `<button meButton>Test Button</button>`
})
class TestHostComponent {}

describe('MeButtonDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: MeButton;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);

    const directiveEl = fixture.debugElement.query(By.directive(MeButton));
    directive = directiveEl.injector.get(MeButton);

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
