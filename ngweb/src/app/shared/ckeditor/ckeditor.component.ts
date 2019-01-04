import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR,NG_VALIDATORS, FormControl } from '@angular/forms';

import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,//值
      useExisting: forwardRef(()=>CkeditorComponent),
      multi:true
    },
    {
      provide: NG_VALIDATORS,//校验
      useExisting: forwardRef(()=>CkeditorComponent),
      multi:true//令牌多对一
    }
  ]
})
export class CkeditorComponent implements ControlValueAccessor {

  public data:string = ''
  private propageteChange=(_:any)=>{};

  //ckeditor配置
  public Editor = DecoupledEditor;
  public config = {
    language: 'zh-cn',
    // extraPlugins: [ MyUploadAdapterPlugin ],
  };

  constructor() { }
  
  writeValue(obj:any):void{
    this.data=obj;
  }
  registerOnChange(fn:any):void{
    this.propageteChange=fn;
  }
  registerOnTouched(fn:any):void{

  }

  validate(c:FormControl):{[key:string]:any}{
    return this.data?null:{
      editorInvalid:{
        valid:false
      }
    }
  }
  onReady( editor ) {
    editor.ui.view.editable.element.parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.view.editable.element
    );
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = function( loader ) {
      return new FileUploadAdapter(loader);
    };
  }
  onChange( { editor }: ChangeEvent ){
    this.data = editor.getData();
    this.propageteChange(this.data)
  }

}



class FileUploadAdapter {
	
	constructor(private loader) {
	}
	
	upload() {
		return new Promise((resolve, reject) => {
			const data = new FormData();
			data.append('file', this.loader.file);
      
			var xhr = new XMLHttpRequest();
			// xhr.setRequestHeader("Content-type","multipart/form-data");
			xhr.open('post', '/api/uploadpic' );
			xhr.send(data);
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4 && xhr.status == 200) {
					let data=JSON.parse(xhr.responseText);
					if(data.fileName){
						resolve({
							default:'/api'+data.fileName
						});
					}else {
						reject(data.msg);
					}
				} 
			};
		});
	}
	abort() {
	}
}