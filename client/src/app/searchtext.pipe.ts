import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'searchtext'
})
export class SearchtextPipe implements PipeTransform {

 //working search by task_id 
/* transform(items: any[], searchText: any): any {
    if(!items) return  [];
    console.log("value", items);
    console.log("searchtext"+searchText);
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.Task_ID.toLowerCase().includes(searchText)   }); 
  }*/

  transform(items:any[], searchText: any, searchParent: any, _gsearchPriority: number, _lsearchPriority:
     number, start_date: any, end_date: any){
    
    if(items && items.length){
      return items.filter(item=>{
        console.log("items", items);
        if(searchText && item.Task_ID.toLowerCase().indexOf(searchText.toLowerCase()) === -1){
          return false;
        }
        console.log("parentsearch", searchParent, item.Task_ID);
        if(searchParent && item.Task_ID.toLowerCase().indexOf(searchParent.toLowerCase()) === -1){
          return false;
        }

        if(_gsearchPriority && (item.Priority < _gsearchPriority)){
          return false;
        }
        if(_lsearchPriority && (item.Priority > _lsearchPriority)){
          return false;
        }
        console.log("date" +start_date, item.Start_date);
        
        if(start_date && item.Start_date.indexOf(start_date) === -1){
          return false;
        }
        if(end_date && item.End_date.indexOf(end_date) === -1){
          return false;
        }
        return true;
      })
    }
    else{
      return items;
    }
  }

}
