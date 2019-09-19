import {Component, Inject, OnInit} from '@angular/core';
import {SprintService} from '../../../service/sprint-service/sprint.service';
import {Sprint} from '../../../models/sprint';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {CreateSprintComponent} from '../create-sprint/create-sprint.component';

@Component({
  selector: 'app-view-sprints',
  templateUrl: './view-sprints.component.html',
  styleUrls: ['./view-sprints.component.scss']
})
export class ViewSprintsComponent implements OnInit {

  sprints: Sprint[];

  constructor(private sprintService: SprintService, public dialog: MatDialog ) { }

  ngOnInit() {
    this.getAllSprints();
  }

  getAllSprints() {
    this.sprintService.getAll().subscribe(sprints =>
      this.sprints = sprints);
    console.log(this.sprints);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateSprintComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


