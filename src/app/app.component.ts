import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from './icon/icon.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { SubtaskListComponent } from './subtask-list/subtask-list.component';
import { IconName } from './icon-names';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IconComponent,
    InlineEditComponent,
    FormsModule,
    SubtaskListComponent,
    CommonModule,
  ],
  // templateUrl: './app.component.html',
  template: `<main class="main-content">
    <div>
      <!-- empty space -->
    </div>
    <aside
      class="ticket"
      style="max-width: 591px; width: 100%; height: 100vh; background-color: white;"
    >
      <div class="ticket-header">
        <h2 class="ticket-header--title">Mega Electronix</h2>
        <h5 class="ticket-header--subtitle">Edit task</h5>
      </div>

      <div class="divider"></div>

      <div class="ticket-nav">
        @for(navItem of navItems; track navItem.id){
        <button
          class="ticket-nav--item btn"
          [ngClass]="{ active: activeTab === navItem.id }"
          (click)="activeTab = navItem.id"
        >
          <app-icon [iconSize]="12" [iconName]="navItem.icon"></app-icon>
          <span>{{ navItem.label }}</span>
        </button>
        }
      </div>

      <div class="divider"></div>

      <div class="tab-content">
        <div
          class="tab-pane fade"
          [ngClass]="{ 'show active': activeTab === 'tab1' }"
        >
          <div class="ticket-fields">
            <p class="ticket-fields--ai_prompt">
              <app-icon iconName="icon-logicpilot"></app-icon>
              Ask Logic Pilot to generate subtasks or to summarize comments
            </p>

            <form>
              <app-inline-edit
                id="status"
                label="Status"
                iconName="icon-status"
              ></app-inline-edit>

              <app-inline-edit
                id="assignee"
                label="Assignee"
                iconName="icon-assignee"
              ></app-inline-edit>

              <app-inline-edit
                id="coowner"
                label="Co-owner"
                iconName="icon-coowner"
              ></app-inline-edit>

              <app-inline-edit
                id="importance"
                label="Importance"
                iconName="icon-importance"
              ></app-inline-edit>

              <app-inline-edit
                id="customername"
                label="Customer name"
                iconName="icon-customername"
              ></app-inline-edit>

              <app-inline-edit
                id="invoiceid"
                label="Invoice ID"
                iconName="icon-invoiceid"
              ></app-inline-edit>
            </form>
          </div>

          <div class="ticket-subtasks--header">
            <h4>Subtasks</h4>
            <div class="d-flex align-items-center gap-2">
              <div
                class="progress"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar"
                  [style.width.%]="completionPercentage"
                ></div>
              </div>
              <p>{{ completedSubtasks }}/{{ totalSubtasks }}</p>
            </div>
          </div>

          <div class="divider"></div>

          <app-subtask-list
            (totalSubtasks)="onTotalSubtasks($event)"
            (completedSubtasks)="onCompletedSubtasks($event)"
          ></app-subtask-list>
        </div>
        <div
          class="tab-pane fade"
          [ngClass]="{ 'show active': activeTab === 'tab2' }"
        >
          <!--  -->
        </div>
        <div
          class="tab-pane fade"
          [ngClass]="{ 'show active': activeTab === 'tab3' }"
        >
          <!--  -->
        </div>
        <div
          class="tab-pane fade"
          [ngClass]="{ 'show active': activeTab === 'tab4' }"
        >
          <!--  -->
        </div>
      </div>
      <div class="divider"></div>
    </aside>
  </main>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
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

  activeTab = 'tab1'; // default active tab

  totalSubtasks: number = 0;
  completedSubtasks: number = 0;

  onTotalSubtasks(total: number) {
    this.totalSubtasks = total;
  }

  onCompletedSubtasks(completed: number) {
    this.completedSubtasks = completed;
  }

  get completionPercentage(): number {
    return this.totalSubtasks === 0
      ? 0
      : (this.completedSubtasks / this.totalSubtasks) * 100;
  }
}
