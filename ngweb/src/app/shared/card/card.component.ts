import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() mainRouter
  @Input() primaryRouter
  @Input() auxRouter
  @Input() articles$

  constructor() { }

  ngOnInit() {
   
  }

}
