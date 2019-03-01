import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    恭喜你，发现了待开发的新页面
  `,
  styles: [`
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}
