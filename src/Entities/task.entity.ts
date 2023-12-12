export enum status {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
export class TaskEntity {
  id: string;
  title: string;
  status: status;
  description: string;
  category: string;
}
