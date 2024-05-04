import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Observable, catchError, of, throwError} from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);

    return tasks;
  }

  // Method to fetch JSON tasks details from server
  getJsonData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tasks`).pipe(
      catchError(error => {
        console.error('Error fetching JSON data:', error);
        return throwError(()=> new Error('Something went wrong; please try again later.'));
      })
    );
  }
}
