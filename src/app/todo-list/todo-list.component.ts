import { Component, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'

})

export class TodoListComponent {
  todos: { id: number, title: string }[] = [{ 'id': 1, "title": 'Todo 1' }];
  newTodok: string = "";

  getTodoCount(): number {
    return this.todos.length;

  }
  addTodoFunc(): void {
    const newId = this.todos.length + 1;
    this.todos.push({ id: newId, title: this.newTodok });
  }
  addTodo(): void {
    const newId = this.todos.length + 1;
    this.todos.push({ id: newId, title: this.newTodok });
  }
  onInputChange(event: any): void {
    this.newTodok = event.target.value;
  };
  onDelete(id: number): void {
    this.todos = this.todos.filter(item => item.id !== id);
    console.log(this.todos);
  }
  private _taskTitle!: string;

  // @Input() get taskTitle(): string {
  //   return this._taskTitle;
  // }
  // setTaskTitle(value: string) {
  //   this._taskTitle = value;
  // }

  @Input({
    alias: 'title'
  })
  taskTitle!: string;
}
