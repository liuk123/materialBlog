import { Component, Input }  from '@angular/core';
import { AdComponent } from 'src/app/domain';

@Component({
  template: `
    <div class="ad-card" style="padding:0">
      <app-video
        [src]="data?.src"
        [autoplay] = "false"></app-video>
    </div>
  `,
  styleUrls:['./ad-banner.component.scss']
})
export class advideoComponent implements AdComponent {
  @Input() data: any;
}