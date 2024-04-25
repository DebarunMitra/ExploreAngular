import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Observable, of} from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);

    return tasks;
  }
}
