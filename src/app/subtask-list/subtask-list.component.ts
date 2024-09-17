import {
  Component,
  ElementRef,
  inject,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../shared/icon/icon.component';
import { SubtaskComponent } from './subtask/subtask.component';
import { Subtask } from './subtask/subtask.model';
import { FieldsComponent } from '../ticket/fields/fields.component';
import { ProgressComponent } from '../shared/progress/progress.component';
import { DividerComponent } from '../shared/divider/divider.component';
import { SubtaskService } from './subtask/subtask.service';

@Component({
  selector: 'app-subtask-list',
  standalone: true,
  imports: [
    IconComponent,
    FormsModule,
    SubtaskComponent,
    FieldsComponent,
    ProgressComponent,
    DividerComponent,
  ],
  templateUrl: './subtask-list.component.html',
  styleUrl: './subtask-list.component.scss',
})
export class SubtaskListComponent implements OnInit {
  subtaskService: SubtaskService = inject(SubtaskService);
  subtasks: Subtask[] = [];

  @ViewChildren('subtaskInput') subtaskInputs!: QueryList<ElementRef>;
  private focusNewSubtask = false;

  ngOnInit() {
    this.subtasks = this.subtaskService.getAll();
  }

  ngAfterViewChecked() {
    if (this.focusNewSubtask) {
      this.focusLastSubtask();
      this.focusNewSubtask = false;
    }
  }
  addSubtask() {
    const lastSubtask = this.subtasks.at(-1);
    if (lastSubtask?.name === '') {
      this.focusLastSubtask();
      return;
    }

    const newSubtask: Subtask = { id: Date.now(), name: '', completed: false };
    this.subtaskService.add(newSubtask);
    this.focusNewSubtask = true;
  }

  private focusLastSubtask() {
    const inputs = this.subtaskInputs.toArray();
    if (inputs.length > 0) {
      inputs[inputs.length - 1].nativeElement.focus();
    }
  }

  get totalSubtasks(): number {
    return this.subtasks.length;
  }
  get completedSubtasks(): number {
    return this.subtasks.filter((subtask) => subtask.completed).length;
  }
  get completionPercentage(): number {
    return this.totalSubtasks === 0
      ? 0
      : (this.completedSubtasks / this.totalSubtasks) * 100;
  }
}
