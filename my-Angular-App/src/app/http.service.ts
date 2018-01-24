import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  createNewTask(task) {
    return this._http.post('/tasks', task)
  }
  updateTask(task){
    return this._http.patch('/tasks', task);
  }
}
