import { HttpParams } from '@angular/common/http';

export const deepClone = (values)=>{
    let copy;
    if (null == values || "object" != typeof values) return values;
    if (values instanceof Date) {
        copy = new Date();
        copy.setTime(values.getTime());
        return copy;
    }
    if (values instanceof Array) {
        copy = [];
        for (let i = 0, len = values.length; i < len; i++) {
            copy[i] = deepClone(values[i]);
        }
        return copy;
    }
    if (values instanceof Object) {copy = {};
        for (let attr in values) {
            if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
        }
        return copy;
    }
    throw new Error("Unable to copy values! Its type isn't supported.");
}

//把一个对象数组分成三分
// columns:Navigation[][] = [[],[],[]]
export const columnsArr = (data:[],columns)=>{
    columns = data.reduce((columns, item)=>{
      let minH = columns[0].reduce((s,v) => s += v.data.length + 2, 0)
      let n = 0

      for(let j = 1; j < columns.length; j++){
        let jh = columns[j].reduce((s,v) => s += v.data.length + 2, 0)
        if(minH>jh){
          minH=jh
          n=j
        }
      }
      columns[n].push(item)
      return columns 
    },columns)
}

//对象属性去除空格
export const trimobj=(data:Object)=>{
    if(data instanceof Object){
        for(let i in data){
            if(typeof data[i] == 'string'){
                data[i] = data[i].trim()
            }else if(data[i] instanceof Object){
                trimobj(data[i])
            }
        }
    }
    return data;
}

export const encodeParams=(params)=>{
    return Object.keys(params)
        .filter(key=>params[key])
        .reduce((sum:HttpParams,key:string)=>{
            return sum.append(key,params[key]);
        },new HttpParams());
}
export const search=(uri,v)=>{
    if(v){
      window.open(uri + v, '_blank')
    }else{
      const reg = /(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z0-9]+(\.com)?/
      uri.replace(reg,(keyword)=>{
        window.open(keyword, '_blank')
      })
    }
}