import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoListBS: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  constructor() { }

  addTodoToList(todo: Todo) {
    const currentTodoList = this.todoListBS.getValue();
    currentTodoList.push(todo);
    this.todoListBS.next(currentTodoList);
  }

  removeTodoFromList(todo: Todo) {
    const currentTodoList = this.todoListBS.getValue();
    const index = currentTodoList.findIndex(item => item.task === todo.task);
    currentTodoList.splice(index, 1);
    this.todoListBS.next(currentTodoList);
  }

  changeTodoItemCompleteness(todo: Todo) {
    const currentTodoList = this.todoListBS.getValue();
    const index = currentTodoList.findIndex(item => item.task === todo.task);
    currentTodoList[index].completed = !currentTodoList[index].completed;
    this.todoListBS.next(currentTodoList);
  }
}
