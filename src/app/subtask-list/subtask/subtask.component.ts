import { Component, Input, Output } from '@angular/core';

import { Subtask } from './subtask.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './subtask.component.html',
  styleUrl: './subtask.component.scss',
})
export class SubtaskComponent {
  @Input({ required: true }) subtask!: Subtask;
}
