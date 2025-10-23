import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MeField} from './me-field';
import {ChangeDetectionStrategy, Component, provideZonelessChangeDetection, signal} from '@angular/core';
import {By} from '@angular/platform-browser';
import {MeInputDirective} from '../me-input';
import {MeLabel} from '../me-label';
import {MeHelp} from '../me-help';


@Component({
  standalone: true,
  imports: [MeField, MeInputDirective, MeLabel, MeHelp],
  template: `
    <me-field>
      @if (showLabel()) {
        <me-label>Test Label</me-label>
      }
      <input meInput [id]="inputId()" [required]="isRequired()"/>
      @if (showHelp()) {
        <me-help>Test Help Text</me-help>
      }
    </me-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestHostComponent {
  showLabel = signal(false);
  showHelp = signal(false);
  isRequired = signal(false);
  inputId = signal<string | null>(null);
}

describe('MeField', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  const getElem = (selector: string): HTMLElement | null => {
    const debugElem = fixture.debugElement.query(By.css(selector));
    return debugElem ? debugElem.nativeElement : null;
  }

  beforeEach(async () => {
    (MeField)['nextMeFieldIndex'] = 0;

    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const meField = fixture.debugElement.query(By.directive(MeField));
    expect(meField).toBeTruthy();
  });

  describe('Id relation', () => {
    it('should assign a unique ID to the input if it has no ID', () => {
      const input = getElem('input');
      expect(input?.id).toBe('me-field-0');
    });

    it('should respect the input\'s pre-existing ID', () => {
      hostComponent.inputId.set('custom-id');
      fixture.detectChanges();
      const input = getElem('input');
      expect(input?.id).toBe('custom-id');
    });

    it('should link the label\'s "for" attr to the input\'s ID', () => {
      hostComponent.showLabel.set(true);
      hostComponent.inputId.set('custom-id');
      fixture.detectChanges();

      const label = getElem('label');
      expect(label?.getAttribute('for')).toBe('custom-id')
    });

    it('should link the help\'s "id" attr to the input\'s ID', () => {
      hostComponent.showHelp.set(true);
      hostComponent.inputId.set('custom-id');
      fixture.detectChanges();

      const help = getElem('me-help');
      expect(help?.getAttribute('id')).toBe('help-custom-id');
    });
  });

  describe('Help Text (aria-describedby) Coordination', () => {
    it('should not add aria-describedby if no help text is present', () => {
      const input = getElem('input');
      expect(input?.hasAttribute('aria-describedby')).toBe(false);
    });

    it('should add aria-describedby if help text is present', () => {
      hostComponent.showHelp.set(true);
      hostComponent.inputId.set('custom-id');
      fixture.detectChanges();

      const input = getElem('input');
      const help = getElem('me-help');

      const expectedHelpId = 'help-custom-id';
      expect(help?.id).toBe(expectedHelpId);
      expect(input?.getAttribute('aria-describedby')).toBe(expectedHelpId);
    });
    it('should remove aria-describedby when help text is dynamically removed', () => {
      hostComponent.showHelp.set(true);
      fixture.detectChanges();
      const input = getElem('input');
      expect(input?.hasAttribute('aria-describedby')).toBe(true);

      hostComponent.showHelp.set(false);
      fixture.detectChanges();
      expect(input?.hasAttribute('aria-describedby')).toBe(false);
    });
  });

  describe('Required State Rendering', () => {
    it('should not render the .required-wrapper when input is not required', () => {
      hostComponent.isRequired.set(false);
      fixture.detectChanges();

      const wrapper = getElem('.required-wrapper');
      expect(wrapper).toBeNull();
    });

    it('should render the .required-wrapper when input is required', () => {
      hostComponent.isRequired.set(true);
      fixture.detectChanges();

      const wrapper = getElem('.required-wrapper');
      expect(wrapper).not.toBeNull();
    });

    it('should dynamically add and remove the .required-wrapper', () => {
      hostComponent.isRequired.set(true);
      fixture.detectChanges();
      expect(getElem('.required-wrapper')).not.toBeNull();

      hostComponent.isRequired.set(false);
      fixture.detectChanges();
      expect(getElem('.required-wrapper')).toBeNull();
    });
  });
});
