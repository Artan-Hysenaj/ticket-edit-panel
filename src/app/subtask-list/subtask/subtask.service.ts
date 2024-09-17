import { Injectable } from '@angular/core';
import { DUMMY_SUBTASKS } from '../../dummy-subtasks';
import { Subtask } from './subtask.model';

@Injectable({
  providedIn: 'root',
})
export class SubtaskService {
  private subtasks = DUMMY_SUBTASKS;

  getAll() {
    return this.subtasks;
  }

  add(subtask: Subtask) {
    this.subtasks.push(subtask);
  }
}
