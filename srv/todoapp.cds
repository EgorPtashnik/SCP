using { todoapp } from '../db/todoapp';

service TodoService {
  entity Todos as projection on todoapp.Todo;
}
