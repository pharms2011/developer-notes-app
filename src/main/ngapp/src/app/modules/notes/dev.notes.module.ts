import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewUserStoryComponent} from './components/user-story/view-user-story/view-user-story.component';
import {ViewBugsComponent} from './components/bug/view-bugs/view-bugs.component';
import {ViewBugComponent} from './components/bug/view-bug/view-bug.component';
import {ViewNoteComponent} from './components/note/view-note/view-note.component';
import {ViewNotesComponent} from './components/note/view-notes/view-notes.component';
import {ViewSprintComponent} from './components/sprint/view-sprint/view-sprint.component';
import {ViewSprintsComponent} from './components/sprint/view-sprints/view-sprints.component';
import { CreateSprintComponent } from './components/sprint/create-sprint/create-sprint.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CreateUserStoryComponent } from './components/user-story/create-user-story/create-user-story.component';
import { ViewUserStoriesComponent } from './components/user-story/view-user-stories/view-user-stories.component';
import { NewTaskComponent } from './components/task/new-task/new-task.component';
import { ViewTasksComponent } from './components/task/view-tasks/view-tasks.component';

@NgModule({
  declarations: [
    ViewBugsComponent,
    ViewBugComponent,
    ViewNoteComponent,
    ViewNotesComponent,
    ViewSprintComponent,
    ViewSprintsComponent,
    ViewUserStoryComponent,
    CreateSprintComponent,
    CreateUserStoryComponent,
    ViewUserStoriesComponent,
    NewTaskComponent,
    ViewTasksComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
})
export class DevNotesModule { }
