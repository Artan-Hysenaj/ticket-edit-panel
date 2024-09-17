import { Subtask } from './subtask-list/subtask/subtask.model';

export const DUMMY_SUBTASKS: Subtask[] = [
  { id: 1, name: 'Send invoice to collections agency', completed: false },
  { id: 2, name: 'Write an email to them to follow-up', completed: true },
  { id: 3, name: 'Send paper mail to account', completed: false },
  {
    id: 4,
    name: 'This is my new subtask... I’m autofocused here when I add a subtask',
    completed: false,
  },
];
