import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-ai-prompt',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './ai-prompt.component.html',
  styleUrl: './ai-prompt.component.scss',
})
export class AiPromptComponent {
  @Input({ required: true }) message!: string;
}
