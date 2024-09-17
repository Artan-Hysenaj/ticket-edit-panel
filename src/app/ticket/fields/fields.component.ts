import { Component } from '@angular/core';
import { AiPromptComponent } from '../../shared/ai-prompt/ai-prompt.component';
import { InlineEditComponent } from '../../inline-edit/inline-edit.component';
import { IconName } from '../../shared/icon/icon.model';

interface Field {
  id: string;
  label: string;
  icon: IconName;
}

@Component({
  selector: 'app-fields',
  standalone: true,
  imports: [AiPromptComponent, InlineEditComponent],
  templateUrl: './fields.component.html',
  styleUrl: './fields.component.scss',
})
export class FieldsComponent {
  fields: Field[] = [
    { id: 'status', label: 'Status', icon: 'icon-status' },
    { id: 'assignee', label: 'Assignee', icon: 'icon-assignee' },
    { id: 'coowner', label: 'Co-owner', icon: 'icon-coowner' },
    { id: 'importance', label: 'Importance', icon: 'icon-importance' },
    { id: 'customername', label: 'Customer name', icon: 'icon-customername' },
    { id: 'invoiceid', label: 'Invoice ID', icon: 'icon-invoiceid' },
  ];
}
