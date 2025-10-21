import {MeInputDirective} from './me-input.directive';
import {Component, provideZonelessChangeDetection, signal} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {expect} from 'storybook/test';

@Component({
  standalone: true,
  imports: [MeInputDirective],
  template: `<input
    meInput
    [id]="id()"
    [ariaDescribeBy]="ariaDescribeBy()"
    [disabled]="disabled()"
    [required]="required()"
  />
  `
})
class TestHostComponent {
  id = signal<string | null>(null);
  ariaDescribeBy = signal<string | null>(null);
  disabled = signal(false);
  required = signal(false);
}

describe('MeInputDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: MeInputDirective;
  let inputElement: HTMLInputElement;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      {
        imports: [TestHostComponent],
        providers: [provideZonelessChangeDetection()]
      }
    ).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    const directiveEl = fixture.debugElement.query(By.directive(MeInputDirective));
    directive = directiveEl.injector.get(MeInputDirective);
    inputElement = directiveEl.nativeElement;
    fixture.detectChanges();
  })

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should have the me-input class by default', () => {
    expect(inputElement.classList.contains('me-input')).toBe(true);
  });
  describe('id binding', () => {

    it('id binding', () => {
      const testId = 'test-input-id';
      hostComponent.id.set(testId);
      fixture.detectChanges()
      expect(inputElement.getAttribute('id')).toBe(testId);
    });

    it('should not have an id attribute if id input is null', () => {
      hostComponent.id.set(null);
      fixture.detectChanges();
      expect(inputElement.getAttribute('id')).not.toBe('undefined')
    });

    it('should prioritize _controlledId over the id input', () => {
      // Set id
      const testId = 'input-id';
      const controlledId = 'controlled-id';

      // Set id
      hostComponent.id.set(testId);
      fixture.detectChanges();
      // Set controlled id
      directive._controlledId.set(controlledId);
      fixture.detectChanges();

      expect(inputElement.getAttribute('id')).toBe(controlledId);
    });

    it('should revert to the id input when _controlledId is set back to null', () => {
      const testId = 'input-id';
      const controlledId = 'controlled-id';

      // Set id
      hostComponent.id.set(testId);
      fixture.detectChanges();
      // Set controlled id
      directive._controlledId.set(controlledId);
      fixture.detectChanges();
      // revert
      directive._controlledId.set(null);
      fixture.detectChanges();

      expect(inputElement.getAttribute('id')).toBe(testId)
    });
  })

  describe('aria-describedby binding', () => {
    it('should set the aria-describedby attribute when ariaDescribeBy input is provided', () => {
      const descById = 'help-text-id';
      hostComponent.ariaDescribeBy.set(descById);
      fixture.detectChanges()
      expect(inputElement.getAttribute('aria-describedby')).toBe(descById);
    });


    it('should prioritize _controlledAriaDescribeBy over the ariaDescribeBy input', () => {
      const descById = 'initial-text-id';
      const controlledDescById = 'controlled-text-id';

      //set initial
      hostComponent.ariaDescribeBy.set(descById);
      fixture.detectChanges();
      // set controlled
      directive._controllerAriaDescribeBy.set(controlledDescById);
      fixture.detectChanges();

      expect(inputElement.getAttribute('aria-describedby')).toBe(controlledDescById);
    });

    it('should revert to the ariaDescribeBy input when _controlledAriaDescribeBy is set back to null', () => {
      const descById = 'initial-text-id';
      const controlledDescById = 'controlled-text-id';

      //set initial
      hostComponent.ariaDescribeBy.set(descById);
      fixture.detectChanges();
      // set controlled
      directive._controllerAriaDescribeBy.set(controlledDescById);
      fixture.detectChanges();
      //revert
      directive._controllerAriaDescribeBy.set(null);
      fixture.detectChanges();
      expect(inputElement.getAttribute('aria-describedby')).toBe(descById);
    });
  });

  describe('disabled state', () => {
    it('should not be disabled by default', () => {
      expect(inputElement.disabled).toBe(false);
      expect(inputElement.hasAttribute('disabled')).toBe(false);
      expect(inputElement.getAttribute('aria-disabled')).toBe('false');
    });

    it('should be disabled when disabled input is true', () => {
      hostComponent.disabled.set(true);
      fixture.detectChanges()
      expect(inputElement.disabled).toBe(true);
      expect(inputElement.hasAttribute('disabled')).toBe(true);
      expect(inputElement.getAttribute('aria-disabled')).toBe('true');
    });

    it('should re-enable the input when disabled input is changed to false', () => {
      hostComponent.disabled.set(true);
      fixture.detectChanges();

      hostComponent.disabled.set(false);
      fixture.detectChanges();
      expect(inputElement.disabled).toBe(false);
      expect(inputElement.hasAttribute('disabled')).toBe(false);
      expect(inputElement.getAttribute('aria-disabled')).toBe('false');
    });
  });

  describe('required property', () => {
    it('should return true if the native input element is required', () => {
      hostComponent.required.set(true);
      fixture.detectChanges();
      expect(directive.requiredGetter).toBe(true);
    });

    it('should return false if the native inoput element is not required', () => {
      hostComponent.required.set(false);
      fixture.detectChanges();
      expect(directive.requiredGetter).toBe(false);
    })
  });
})
