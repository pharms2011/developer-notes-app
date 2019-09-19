import { Component, OnInit } from '@angular/core';
import {Sprint} from '../../../models/sprint';
import {ActivatedRoute} from '@angular/router';
import {SprintService} from '../../../service/sprint-service/sprint.service';
import {MatDialog} from '@angular/material';
import {CreateUserStoryComponent} from '../create-user-story/create-user-story.component';

@Component({
  selector: 'app-view-user-stories',
  templateUrl: './view-user-stories.component.html',
  styleUrls: ['./view-user-stories.component.scss']
})
export class ViewUserStoriesComponent implements OnInit {


  selectedSprint: Sprint;

  constructor(private route: ActivatedRoute, private sprintService: SprintService, public dialog: MatDialog ) { }

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
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserStoryComponent, {
      width: '500px',
    });
  }
}
