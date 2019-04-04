import { Component, OnInit, Input } from '@angular/core';
import { Navigation } from 'src/app/domain/navigation';

@Component({
  selector: 'app-recommend-navigation',
  templateUrl: './recommend-navigation.component.html',
  styleUrls: ['./recommend-navigation.component.scss']
})
export class RecommendNavigationComponent implements OnInit {

  @Input()
  columns:Navigation[][]

  constructor() {}

  ngOnInit() { }

  open(url:string){
    window.open(url,'_blank');
  }
}
