using todoapp as db from '../db/todoapp';

service TodoService {
  entity Todos as projection on db.Todo;
}
