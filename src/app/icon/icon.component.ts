import { Component, Input } from '@angular/core';
import { IconName } from '../icon-names';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <img
      [src]="iconPath"
      [width]="iconSize"
      [height]="iconSize"
      alt="{{ iconName }} icon"
    />
  `,
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() iconName!: IconName;
  @Input() iconSize: number = 24;

  get iconPath(): string {
    return `assets/${this.iconName}.svg`;
  }
}
