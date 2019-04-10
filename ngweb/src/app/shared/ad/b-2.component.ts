import { Component, Input }  from '@angular/core';
import { AdComponent } from 'src/app/domain';

@Component({
  template: `
    <div class="ad-card">
      <h4>{{data.name}}</h4>

      <p>{{data.body}}</p>

      <strong>Happy every day</strong>
    </div>
  `,
  styleUrls:['./ad-banner.component.scss']
})
export class adCardComponent implements AdComponent {
  @Input() data: any;
}