import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  task: any[] = [];
  constructor(private _http: HttpClient) {
    this.fetchTasks();
   }
   fetchTasks(): void{
    this._http.get( "http://localhost:8080/tasks/" )
      .subscribe( (data:any) => {
        this.task = data.task;
      });
  }
  fetchTasksByName(title : String){
    return this._http.get( "http://localhost:8080/tasks/"+ title )
  }
}
