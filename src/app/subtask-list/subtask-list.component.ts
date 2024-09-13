import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subtask-list',
  standalone: true,
  imports: [IconComponent, FormsModule],
  template: `
    <div class="subtasks--list">
      <div class="datalist">
        <h5 class="datalist-title">Subtask name</h5>
        <ul class="datalist-group list-group">
          @for (subtask of subtasks; track subtask.id) {
          <li class="list-group-item datalist-group-item">
            <input
              [id]="subtask.id"
              class="form-check-input"
              type="checkbox"
              [(ngModel)]="subtask.completed"
              (ngModelChange)="emitSubtaskCounts()"
            />

            <input
              #subtaskInput
              [id]="subtask.id"
              type="text"
              class="form-text-input"
              placeholder="New subtask"
              [(ngModel)]="subtask.name"
            />
          </li>

          }
        </ul>

        <button class="datalist-add btn" (click)="addSubtask()">
          <app-icon [iconSize]="10" iconName="icon-addsubtask"></app-icon>
          <span>Add subtask</span>
        </button>
      </div>
    </div>
  `,
  styleUrl: './subtask-list.component.scss',
})
export class SubtaskListComponent {
  subtasks = [
    { id: 1, name: 'Send invoice to collections agency', completed: false },
    { id: 2, name: 'Write an email to them to follow-up', completed: true },
    { id: 3, name: 'Send paper mail to account', completed: false },
    {
      id: 4,
      name: 'This is my new subtask... I’m autofocused here when I add a subtask',
      completed: false,
    },
  ];

  @Output() totalSubtasks = new EventEmitter<number>();
  @Output() completedSubtasks = new EventEmitter<number>();

  @ViewChildren('subtaskInput') subtaskInputs!: QueryList<ElementRef>;
  private focusNewSubtask = false;

  ngOnInit() {
    this.emitSubtaskCounts();
  }

  ngAfterViewChecked() {
    if (this.focusNewSubtask) {
      this.focusLastSubtask();
      this.focusNewSubtask = false;
    }
  }
  addSubtask() {
    const lastSubtask = this.subtasks[this.subtasks.length - 1];
    if (lastSubtask.name === '') {
      this.focusLastSubtask();
      return;
    }
    this.subtasks.push({ id: Math.random(), name: '', completed: false });
    this.focusNewSubtask = true;
    this.emitSubtaskCounts();
  }

  private focusLastSubtask() {
    const inputs = this.subtaskInputs.toArray();
    if (inputs.length > 0) {
      inputs[inputs.length - 1].nativeElement.focus();
    }
  }

  emitSubtaskCounts() {
    this.totalSubtasks.emit(this.subtasks.length);
    const completedCount = this.subtasks.filter(
      (subtask) => subtask.completed
    ).length;
    this.completedSubtasks.emit(completedCount);
  }
}
