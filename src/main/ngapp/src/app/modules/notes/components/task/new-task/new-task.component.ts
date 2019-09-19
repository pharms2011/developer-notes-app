import { Component, OnInit } from '@angular/core';
import {SprintService} from '../../../service/sprint-service/sprint.service';
import {UserStoryService} from '../../../service/user-story-service/user-story.service';
import {Task} from '../../../models/task';
import {TaskService} from '../../../service/task-service/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  newTask: Task;

  constructor(private userStoryService: UserStoryService, private taskService: TaskService) {
  }

  ngOnInit() {
    this.newTask = {
      taskId: -1,
      parentId: this.userStoryService.currentUserStory.userStoryId,
      date: new Date(),
      content: '',
      estimate: 0
    };
  }

  save() {
    console.log(this.newTask.content);
    if (
      this.newTask.content !== null &&
      this.newTask.date !== null
    ) {
      console.log('Task starting on ' + this.newTask.date + 'sent to be saved');
      this.userStoryService.currentUserStory.tasks.push(this.newTask);
      this.userStoryService.saveUserStory(this.userStoryService.currentUserStory);
    }
  }
}
