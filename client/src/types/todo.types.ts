export interface TodoResponse {
  title: string;
  id: string;
  description?: string;
  completed?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface TodoInput {
  title: string;
  description?: string;
  completed?: boolean;
}
