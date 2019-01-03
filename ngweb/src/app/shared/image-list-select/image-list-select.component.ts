import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR,NG_VALIDATORS, FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>ImageListSelectComponent),
      multi:true//令牌多对一
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=>ImageListSelectComponent),
      multi:true//令牌多对一
    }
  ]
})
export class ImageListSelectComponent implements ControlValueAccessor {

  @Input() title='选择'
  @Input() cols=6;
  @Input() rowHeight='64px';
  @Input() items:string[]=[];
  @Input() useSvgIcon:boolean=false;
  @Input() itemWidth='80px';
  selected;//图片地址
  constructor() { }
  private propageteChange=(_:any)=>{};

  //输入值
  writeValue(obj:any):void{
    this.selected=obj;
  }
  //输出值
  registerOnChange(fn:any):void{
    this.propageteChange=fn;
  }
  registerOnTouched(fn:any):void{

  }
  
  validate(c:FormControl):{[key:string]:any}{
    return this.selected?null:{
      imageListInvalid:{
        valid:false
      }
    }
  }

  onChange(i){
    this.selected=this.items[i];
    this.propageteChange(this.selected)
  }
}
