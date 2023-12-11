enum status {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
export class TaskEntity {
  id: number;
  tittle: string;
  status: status;
  description: string;
}
