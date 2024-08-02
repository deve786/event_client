import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(eventArray:any[],searchString:string): any {
    if(!eventArray || !searchString){
      return eventArray
    }
    else{
      return eventArray.filter((i:any)=>
        i.event_name.trim().toLowerCase().includes(searchString.trim().toLowerCase())
      )
    }
  }

}
