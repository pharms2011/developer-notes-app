import { Injectable } from '@angular/core';
import {Sprint} from '../../models/sprint';
import {BaseService} from '../base-service/base.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Task} from '../../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends BaseService {
  // tslint:disable-next-line:variable-name
  private _tasks: BehaviorSubject<Task[]>;

  taskUrl: string;
  currentTask: Task;

  private dataStore: {
    task: Task[];
  }

  get sprints(): Observable<Task[]> {
    return this._tasks.asObservable();
  }

  setSprint(task: Task) {
    this.currentTask = task;
  }

  constructor(private http: HttpClient) {
    super();
    this.taskUrl = this.url + '/sprint';
    this.dataStore = { task: []};
    this._tasks = new BehaviorSubject<Task[]>([]);
  }
  save(task: Task) {
    console.log('Sprint starting on ' + task.date + 'sent to be saved');
    this.http.post(this.taskUrl + '/saveTask', task).subscribe((res) => {
      console.log(res);
    });
  }

  getAll(id: number): Observable<Task[]> {
    console.log('Task Requested for ');
    return this.http.get<Task[]>(this.taskUrl + '/getAllTasks/' + id);
  }
}
