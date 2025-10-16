import {Component, provideZonelessChangeDetection} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MeButtonDirective } from './me-button.directive';

@Component({
  standalone: true,
  imports: [MeButtonDirective],
  template: `<button meButton>Test Button</button>`
})
class TestHostComponent {}

describe('MeButtonDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: MeButtonDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);

    const directiveEl = fixture.debugElement.query(By.directive(MeButtonDirective));
    directive = directiveEl.injector.get(MeButtonDirective);

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
