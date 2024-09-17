import { Component, Input } from '@angular/core';
import { IconName } from '../shared/icon/icon.model';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-inline-edit',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './inline-edit.component.html',
  styleUrl: './inline-edit.component.scss',
})
export class InlineEditComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) icon!: IconName;
}
