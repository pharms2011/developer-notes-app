import { Component, OnInit } from '@angular/core';
import {UserStoryService} from '../../../service/user-story-service/user-story.service';
import {NewTaskComponent} from '../new-task/new-task.component';
import {MatDialog} from '@angular/material';
import {TaskService} from '../../../service/task-service/task.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.scss']
})
export class ViewTasksComponent implements OnInit {

  currentTask: Task[];

  constructor(private taskService: TaskService, public dialog: MatDialog ) { }

  ngOnInit() {
    this.taskService.
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
