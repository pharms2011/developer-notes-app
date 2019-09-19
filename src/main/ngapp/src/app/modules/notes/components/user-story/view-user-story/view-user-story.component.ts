import { Component, OnInit } from '@angular/core';
import {SprintService} from '../../../service/sprint-service/sprint.service';
import {ActivatedRoute} from '@angular/router';
import {UserStory} from '../../../models/userStory';
import {UserStoryService} from '../../../service/user-story-service/user-story.service';
import {CreateSprintComponent} from '../../sprint/create-sprint/create-sprint.component';
import {MatDialog} from '@angular/material';
import {NewTaskComponent} from '../../task/new-task/new-task.component';

@Component({
  selector: 'app-view-user-story',
  templateUrl: './view-user-story.component.html',
  styleUrls: ['./view-user-story.component.scss']
})
export class ViewUserStoryComponent implements OnInit {

  selectedUserStory: UserStory;

  constructor(private userStoryService: UserStoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      const id = params.get('userStoryId');
      this.selectedUserStory = null;
      console.log('User Story id: ' + id);
      this.userStoryService.getUserStory(Number(id)).subscribe(userStory => {
        this.selectedUserStory = userStory;
        this.userStoryService.currentUserStory = userStory;
        console.log(this.selectedUserStory);
      });
    });
  }

}
