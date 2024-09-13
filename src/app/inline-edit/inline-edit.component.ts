import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { IconName } from '../icon-names';

@Component({
  selector: 'app-inline-edit',
  standalone: true,
  imports: [IconComponent],
  template: `
    <div class="inline-edit d-flex align-items-center mb-1">
      <label [for]="id" class="col-4">
        <app-icon [iconSize]="16" [iconName]="iconName"></app-icon>
        <span>{{ label }}</span>
      </label>
      <div class="inline-edit--control col-8 d-flex align-content-center">
        @if (id==="status") {
        <span class="status-badge">Unpaid</span>
        } @else {
        <input type="text" placeholder="Enter {{ label }}" autocomplete="off" />
        }
      </div>
    </div>
  `,
  styleUrl: './inline-edit.component.scss',
})
export class InlineEditComponent {
  @Input() id!: string;
  @Input() label!: string;
  @Input() iconName!: IconName;
}
