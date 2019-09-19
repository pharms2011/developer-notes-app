import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Sprint} from '../../../models/sprint';
import {SprintService} from '../../../service/sprint-service/sprint.service';
import {ActivatedRoute} from '@angular/router';
import {CreateSprintComponent} from '../create-sprint/create-sprint.component';
import {MatDialog} from '@angular/material';
import {CreateUserStoryComponent} from '../../user-story/create-user-story/create-user-story.component';

@Component({
  selector: 'app-view-sprint',
  templateUrl: './view-sprint.component.html',
  styleUrls: ['./view-sprint.component.scss']
})
export class ViewSprintComponent implements OnInit {

  selectedSprint: Sprint;

  constructor(private sprintService: SprintService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      const id = params.get('sprintId');
      this.selectedSprint = null;
      console.log('main content, id: ' + id);
      this.sprintService.getSprint(Number(id)).subscribe(sprint => {
        this.selectedSprint = sprint;
        this.sprintService.currentSprint = sprint;
        console.log(this.selectedSprint);
      });
    });
  }
}
