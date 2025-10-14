import {Component} from '@angular/core';
import {MTag, TagVariant} from 'ui-core';

interface LabelColor {
  label: string;
  variant: TagVariant;
}

@Component({
  selector: 'app-tags',
  imports: [MTag],
  templateUrl: './tags.html',
  styleUrl: './tags.scss'
})
export class Tags {
  labels: LabelColor[] = [
    {
      label: 'Python',
      variant: 'primary',
    },
    {
      label: 'Django',
      variant: 'secondary',
    }, {
      label: 'Angular',
      variant: 'info',
    }, {
      label: 'FastAPI',
      variant: 'danger',
    }, {
      label: 'PostgreSQL',
      variant: 'warning',
    }
  ]
}
