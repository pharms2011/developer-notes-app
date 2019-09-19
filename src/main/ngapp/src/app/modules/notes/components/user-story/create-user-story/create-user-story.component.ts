import { Component, OnInit } from '@angular/core';
import {Sprint} from '../../../models/sprint';
import {SprintService} from '../../../service/sprint-service/sprint.service';
import {UserStory} from '../../../models/userStory';
import {Task} from '../../../models/task';
import {UserStoryService} from '../../../service/user-story-service/user-story.service';

@Component({
  selector: 'app-create-user-story',
  templateUrl: './create-user-story.component.html',
  styleUrls: ['./create-user-story.component.scss']
})
export class CreateUserStoryComponent implements OnInit {

  newUserStory: UserStory;

  constructor(private sprintService: SprintService, private userStoryService: UserStoryService) { }

  ngOnInit() {
    this.newUserStory = {
      tasks: [],
      jiraId: 0,
      title: '',
      estimate: 0,
      remainingTime: 0,
      parentId: this.sprintService.currentSprint.sprintId,
      description: '',
      userStoryId: -1
    };
  }

  save() {
    console.log(this.newUserStory.title);
    if (
      this.newUserStory.tasks !== null &&
      this.newUserStory.title !== null &&
      this.newUserStory.estimate !== null &&
      this.newUserStory.remainingTime !== 0) {
      console.log('User Story ' + this.newUserStory.title + 'sent to be saved');
      this.sprintService.currentSprint.stories.push(this.newUserStory);
      this.userStoryService.saveUserStory(this.newUserStory);
      console.log(this.newUserStory);
    }
  }

}
