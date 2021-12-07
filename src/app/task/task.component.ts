import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  title: string = "";
  allTasks: any[] = [];
  taskByTitle: any[] = [];
  result: any;
  task2: any = [];
  constructor(private _httpService:TaskServiceService) { }


  ngOnInit(): void {
  }
  getTasks(): void {
    this.allTasks = this._httpService.task;
  }
  taskInfo(event:any):void{
    event.preventDefault();
    this.title = event.target.title.value;
    this._httpService.fetchTasksByName(this.title)
    .subscribe( (data:any) => {
      this.task2 = data.task;
      console.log("Find by Name", this.task2 );
    });
  }
}
