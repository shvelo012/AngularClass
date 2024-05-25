import { Component, Input } from '@angular/core';
import { Item } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {
  @Input({ required: true }) item!: Item;

  onArchieveClick() {
    console.log('Archieve clicked');
  }
}
