import { Component, OnInit, ElementRef, Input,  } from '@angular/core';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
   
})
export class VideoComponent implements OnInit {

    player:HTMLVideoElement
    volumevalue:number = 1          //声音
    timetotal:number = 0            //总时间
    timevalue:number = 0            //目前时间

    @Input() src:string
    @Input() autoplay:boolean = false
    @Input() loop:boolean = false
    @Input() muted:boolean = false
    @Input() preload:string = 'metadata'

    constructor(private el:ElementRef) {}

    ngOnInit() {
        this.player = this.el.nativeElement.querySelector('.player')
    }
    
    volumeLabel(value: number | null) {
        if (!value) return 0;
        return value*10;
    }
    
    canplay(ev){
        this.timetotal = Math.floor(this.player.duration);
    }
    ended(){
        
    }

    timeChange(ev){
        this.player.currentTime = ev.value;
    }
    timeupdate(ev){
        this.timevalue = Math.floor(this.player.currentTime)
    }
    volumeChange(ev){
        this.player.volume = ev.value;
    }
    volumeupdate(ev){
        this.volumevalue = this.player.volume
    }

    fullScreen(){

    }
}
