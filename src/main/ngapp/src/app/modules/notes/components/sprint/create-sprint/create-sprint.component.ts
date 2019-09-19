import { Component, OnInit } from '@angular/core';
import {Sprint} from '../../../models/sprint';
import {SprintService} from '../../../service/sprint-service/sprint.service';

@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.scss']
})
export class CreateSprintComponent implements OnInit {

  newSprint: Sprint;

  constructor(private sprintService: SprintService) { }

  ngOnInit() {
    this.newSprint = {
      bugs: [],
      endDate: null,
      sprintCapacity: 0,
      sprintDesc: null,
      sprintId: -1,
      startDate: null,
      userStoryId: -1,
      stories: []
    };
  }

  save() {
    console.log(this.newSprint.sprintDesc);
    if (
      this.newSprint.startDate !== null &&
      this.newSprint.endDate !== null &&
      this.newSprint.sprintDesc !== null &&
      this.newSprint.sprintCapacity !== 0) {
      console.log('Sprint starting on ' + this.newSprint.startDate + 'sent to be saved');
      this.sprintService.save(this.newSprint);
    }
  }
}
