import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url = 'http://localhost:8080/';
  constructor() { }
}
