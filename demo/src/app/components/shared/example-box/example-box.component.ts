import { Component, Input } from '@angular/core';
import {Analytics} from '../../../shared/analytics/analytics';

@Component({
  selector: 'ngxd-example-box',
  templateUrl: './example-box.component.html'
})
export class ExampleBoxComponent {
  @Input() demoTitle: string;
  @Input() component: string;
  @Input() demo: string;
  @Input() snippets: Object;

  constructor(private _analytics: Analytics) {}
}
