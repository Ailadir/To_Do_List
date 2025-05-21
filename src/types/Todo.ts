export interface TodoItemType {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoFilterType = 'all' | 'active' | 'completed'; 
