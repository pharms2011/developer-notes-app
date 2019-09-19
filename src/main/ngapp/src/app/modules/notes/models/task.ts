export interface Task {
  taskId: number;
  parentId: number;
  date: Date;
  content: string;
  estimate: number;
}
