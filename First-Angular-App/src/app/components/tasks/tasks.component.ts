import { Component } from '@angular/core';
import {Task} from '../../Task';
import { TaskService } from '../../services/task.service';
// import {TASKS} from '../../mock-task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [CommonModule, TaskItemComponent]
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
}
