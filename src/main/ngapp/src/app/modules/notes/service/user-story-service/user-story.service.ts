import { Injectable } from '@angular/core';
import {UserStory} from '../../models/userStory';
import {BaseService} from '../base-service/base.service';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Sprint} from '../../models/sprint';

@Injectable({
  providedIn: 'root'
})
export class UserStoryService extends BaseService {
  // tslint:disable-next-line:variable-name
  private _userStories: BehaviorSubject<UserStory[]>;

  userStoryUrl: string;
  currentUserStory: UserStory;

  constructor(private http: HttpClient) {
    super();
    this.userStoryUrl = this.url + '/userStory';
    this.dataStore = { sprints: []};
    this._userStories = new BehaviorSubject<UserStory[]>([]);
  }

  private dataStore: {
    sprints: Sprint[]
  }

  get userStories(): Observable<UserStory[]> {
    return this._userStories.asObservable();
  }

  saveUserStory(userStory: UserStory) {
    console.log('User Story ' + userStory.title + 'sent to be saved');
    console.log(userStory);
    this.http.post(this.userStoryUrl + '/saveUserStory', userStory).subscribe((res) => {
      console.log(res);
    });
  }

  getUserStory(id: number) {
    console.log('UserStory ' + id + ' Requested');
    return this.http.get<UserStory>(this.userStoryUrl + '/getUserStory/' + id);
  }
}
