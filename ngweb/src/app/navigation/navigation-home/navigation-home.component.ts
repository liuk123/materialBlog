import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-home',
  templateUrl: './navigation-home.component.html',
  styleUrls: ['./navigation-home.component.scss']
})
export class NavigationHomeComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  ngOnDestroy(){
    console.log(123)
    // this.router.navigate([{ outlets: { popup: null }}]);
  }
}
