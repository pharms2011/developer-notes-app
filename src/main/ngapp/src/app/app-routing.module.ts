import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateSprintComponent} from './modules/notes/components/sprint/create-sprint/create-sprint.component';
import {ViewSprintsComponent} from './modules/notes/components/sprint/view-sprints/view-sprints.component';
import {ViewSprintComponent} from './modules/notes/components/sprint/view-sprint/view-sprint.component';
import {CreateUserStoryComponent} from './modules/notes/components/user-story/create-user-story/create-user-story.component';
import {ViewUserStoryComponent} from './modules/notes/components/user-story/view-user-story/view-user-story.component';
import {NewTaskComponent} from './modules/notes/components/task/new-task/new-task.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'NewSprint', component: CreateSprintComponent},
      { path: 'NewStory', component: CreateUserStoryComponent},
      { path: 'NewTask', component: NewTaskComponent},
      { path: 'Sprint',
      children: [
        {path: ':sprintId', component: ViewSprintComponent}
        ]},

      { path: 'UserStory',
        children: [
          {path: ':userStoryId', component: ViewUserStoryComponent}
        ]},
      { path: 'Sprints', component: ViewSprintsComponent},
      { path: '', redirectTo: 'Sprints', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
