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

  playersrc='https://nowness-brightcove-com-edgesuite-net.nowness.cn/rtmp/2385340575001/201904/3017/2385340575001_6024549988001_6024251386001.mp4?pubId=2385340575001&videoId=6024251386001'

  constructor(private adService: adService) { }

  ngOnInit() {
    this.ads = this.adService.getBanner()
  }

}
