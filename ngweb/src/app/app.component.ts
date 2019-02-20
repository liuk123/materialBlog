import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  darkTheme:boolean=false;
  theme:string

  constructor(private oc:OverlayContainer){}

  switchTheme(theme){
    // this.darkTheme=theme;
    // if(theme == 'dark'){
    //   this.oc.getContainerElement().classList.add('myapp-dark-theme')
    // }else{
    //   this.oc.getContainerElement().classList.remove('myapp-dark-theme')
    // }
    console.log(theme)
    this.theme = theme;
    switch(theme){
      case 'myapp-green-theme':
        this.oc.getContainerElement().classList.add('myapp-green-theme')
        break

      case 'myapp-blue-theme':
        this.oc.getContainerElement().classList.add('myapp-blue-theme')
        break

      case 'myapp-dark-theme':
        this.oc.getContainerElement().classList.add('myapp-dark-theme')
        this.darkTheme=true
        break

      default:
        this.oc.getContainerElement().classList.add('myapp-indigo-theme')
    }
  }
}
