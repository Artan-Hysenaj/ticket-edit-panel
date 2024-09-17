import { Component, Input } from '@angular/core';
import { IconName } from './icon.model';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input({ required: true }) icon!: IconName;
  @Input() size: number = 24;

  get iconPath(): string {
    return `/assets/${this.icon}.svg`;
  }
}
