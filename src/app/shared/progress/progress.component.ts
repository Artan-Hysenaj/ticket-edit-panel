import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
})
export class ProgressComponent {
  @Input({
    required: true,
    transform: (value: number) => {
      if (value < 0) {
        return 0;
      }
      if (value > 100) {
        return 100;
      }
      return value;
    },
  })
  progress!: number;
}
