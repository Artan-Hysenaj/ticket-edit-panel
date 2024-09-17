import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

import type { IconName } from '../../shared/icon/icon.model';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  navItems: {
    id: string;
    label: string;
    icon: IconName;
  }[] = [
    { id: 'tab1', label: 'Details', icon: 'icon-details' },
    { id: 'tab2', label: 'Activity', icon: 'icon-activity' },
    { id: 'tab3', label: 'Comments', icon: 'icon-comments' },
    { id: 'tab4', label: 'Attachments', icon: 'icon-attachments' },
  ];

  @Input({ required: true }) activeTab!: string;
  @Output() tabChange = new EventEmitter<string>();


  onTabChange(tabId: string) {
    this.tabChange.emit(tabId);
  }

}
