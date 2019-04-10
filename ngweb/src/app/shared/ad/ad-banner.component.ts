import { Component, OnInit, Input, ComponentFactoryResolver, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { AdItem, AdComponent } from 'src/app/domain';
import { AdDirective } from './ad.directive';

@Component({
  selector: 'app-ad-banner',
  template: `
            <div class="ad-banner" (mouseenter)="enterEvent()" (mouseleave)="leaveEvent()">
              <ng-template ad-host></ng-template>
              <div class="right" (click)="loadComponent(1)"><mat-icon svgIcon="angle-right"></mat-icon></div>
              <div class="left" (click)="loadComponent(-1)"><mat-icon svgIcon="angle-left"></mat-icon></div>
            </div>
            `,
  styles: [`
    .ad-banner{
      background-color:rgba(240, 240, 240, 0.95);
      box-shadow: 1px 1px 1px 1px rgba(245, 245, 245, 0.5);
      position:relative;
      height:100%;
    }
    .ad-banner .right,
    .ad-banner .left{
      width: 32px;
      height: 50px;
      display:flex;
      align-items: center;
      justify-content: center;
      position:absolute;
      top:50%;
      margin-top:-33px;
      background-color:rgba(0,0,0,.1);
      color:#fff;
      cursor:pointer;
      opacity: 0;
      border-radius: .2rem;
      overflow:hidden
    }
    .ad-banner .right{
      right:.5rem;
    }
    .ad-banner .left{
      left:.5rem;
    }
    .ad-banner:hover .right,
    .ad-banner:hover .left{
      opacity: 1;
      transition: opacity .3s;
    }
    .ad-banner .left:hover,
    .ad-banner .right:hover{
      background-color:rgba(0,0,0,.4);
      transition: background-color .3s;
    }
    .ad-banner .right mat-icon{
      transform: translateX(-.5rem);
    }
    .ad-banner .left mat-icon{
      transform: translateX(.5rem);
    }
    .ad-banner .left:hover mat-icon,
    .ad-banner .right:hover mat-icon{
      transition: transform .3s;
      transform: translateX(0rem);
    }
  `],
})
export class AdBannerComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem[]
  @ViewChild(AdDirective) adHost: AdDirective;
  currentAdIndex = -1
  interval: any

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  enterEvent(){
    clearInterval(this.interval);
  }
  leaveEvent(){
    this.getAds();
  }

  loadComponent(n:number = 1) {

    this.currentAdIndex = (this.currentAdIndex + n) % this.ads.length;
    if(this.currentAdIndex<0){
      this.currentAdIndex = this.ads.length + this.currentAdIndex
    }

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
    }, 4000);
  }
}
