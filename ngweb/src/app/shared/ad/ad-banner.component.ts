import { Component, OnInit, Input, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { AdItem, AdComponent } from 'src/app/domain';
import { AdDirective } from './ad.directive';

@Component({
  selector: 'app-ad-banner',
  template: `
              <ng-template ad-host></ng-template>
            `
})
export class AdBannerComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem[]
  @ViewChild(AdDirective) adHost: AdDirective;
  currentAdIndex = -1
  interval: any

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }
  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 5000);
  }
}
