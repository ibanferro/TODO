import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todoListBS: BehaviorSubject<Todo[]>;

  constructor(
    private todoService: TodoService,
  ) {
    this.todoListBS = this.todoService.todoListBS;
  }

  ngOnInit(): void {
  }

  addTodoToList( $event: string )
  {
    const newTodo: Todo = { task: $event, completed: false };
    this.todoService.addTodoToList(newTodo);
  }

  removeTodoFromList( $event: Todo )
  {
    this.todoService.removeTodoFromList($event);
  }

  changeTodoItemCompleteness( $event: Todo )
  {
    this.todoService.changeTodoItemCompleteness($event);
  }

}
