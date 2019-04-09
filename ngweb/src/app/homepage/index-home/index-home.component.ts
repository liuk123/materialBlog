import { Component, OnInit } from '@angular/core';
import { AdItem } from 'src/app/domain';
import { adService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.component.html',
  styleUrls: ['./index-home.component.scss']
})
export class IndexHomeComponent implements OnInit {

  ads: AdItem[]

  constructor(private adService: adService) { }

  ngOnInit() {
    this.ads = this.adService.getBanner()
  }

}
