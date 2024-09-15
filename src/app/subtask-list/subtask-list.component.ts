import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { FormsModule } from '@angular/forms';
import { Subtask } from '../subtask';
import { SubtaskService } from '../subtask.service';

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
export class SubtaskListComponent implements OnInit {
  subtaskService: SubtaskService = inject(SubtaskService);
  subtasks: Subtask[] = [];

  @Output() totalSubtasks = new EventEmitter<number>();
  @Output() completedSubtasks = new EventEmitter<number>();

  @ViewChildren('subtaskInput') subtaskInputs!: QueryList<ElementRef>;
  private focusNewSubtask = false;

  ngOnInit() {
    this.subtasks = this.subtaskService.getAll();

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

    const newSubtask: Subtask = { id: Date.now(), name: '', completed: false };
    this.subtaskService.add(newSubtask);
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
    this.completedSubtasks.emit(
      this.subtasks.filter((subtask) => subtask.completed).length
    );
  }
}
