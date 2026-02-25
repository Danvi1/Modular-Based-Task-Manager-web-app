import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {

    @Output() cancel = new EventEmitter();
    @Output() add = new EventEmitter<NewTaskData>();

    // Using Signals for 2way binding
    // enteredTitle = signal('');
    // enteredSummary = signal('')
    // enteredDate = signal('');
    enteredTitle = '';
    enteredSummary = '';
    enteredDate = '';

    onCancel(){
        this.cancel.emit();
    }
    
    onSubmit() {
        this.add.emit({
            title: this.enteredTitle,
            summary: this.enteredSummary,
            date: this.enteredDate
        });
    }
}
