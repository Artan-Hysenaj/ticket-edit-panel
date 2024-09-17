import { Component } from '@angular/core';
import { AsideComponent } from './shared/aside/aside.component';
import { HeaderComponent } from './ticket/header/header.component';
import { DividerComponent } from './shared/divider/divider.component';
import { NavigationComponent } from './ticket/navigation/navigation.component';
import { TabComponent } from './shared/tab/tab.component';
import { SubtaskListComponent } from './subtask-list/subtask-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsideComponent,
    HeaderComponent,
    DividerComponent,
    NavigationComponent,
    TabComponent,
    SubtaskListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  activeTab = 'tab1'; // default active tab

  onTabChange(tab: string) {
    this.activeTab = tab;
  }
}
