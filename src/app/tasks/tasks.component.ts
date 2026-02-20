import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

import { DummyTasks } from './dummy-tasks'

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
    @Input() name?: string;
    @Input() id?: string;
    
    tasks = DummyTasks;

    get userTasks() {
        return this.tasks.filter((task) => task.userId === this.id )
    }
}
