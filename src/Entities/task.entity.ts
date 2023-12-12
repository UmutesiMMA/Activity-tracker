export enum status {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
export class TaskEntity {
  id: number;
  title: string;
  status: status;
  description: string;
}
