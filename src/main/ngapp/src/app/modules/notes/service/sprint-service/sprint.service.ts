import { Injectable } from '@angular/core';
import {BaseService} from '../base-service/base.service';
import {Sprint} from '../../models/sprint';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserStory} from '../../models/userStory';

@Injectable({
  providedIn: 'root'
})
export class SprintService extends BaseService {
  // tslint:disable-next-line:variable-name
  private _sprints: BehaviorSubject<Sprint[]>;

  sprintUrl: string;
  currentSprint: Sprint;

  constructor(private http: HttpClient) {
    super();
    this.sprintUrl = this.url + '/sprint';
    this.dataStore = { sprints: []};
    this._sprints = new BehaviorSubject<Sprint[]>([]);
  }

  private dataStore: {
    sprints: Sprint[]
  }

  get sprints(): Observable<Sprint[]> {
    return this._sprints.asObservable();
  }

  setSprint(sprint: Sprint) {
    this.currentSprint = sprint;
  }

  save(sprint: Sprint) {
    console.log('Sprint starting on ' + sprint.startDate + 'sent to be saved');
    this.http.post(this.sprintUrl + '/saveSprint', sprint).subscribe((res) => {
      console.log(res);
    });
  }

  getAll(): Observable<Sprint[]> {
    console.log('Sprints Requested');
    return this.http.get<Sprint[]>(this.sprintUrl + '/getAllSprints');
  }

  getSprint(id: number) {
    console.log('Sprint ' + id + ' Requested');
    return this.http.get<Sprint>(this.sprintUrl + '/getSprint/' + id);
  }
}
