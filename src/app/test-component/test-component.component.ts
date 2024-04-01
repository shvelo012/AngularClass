import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent {
  public list: string[] = ["0", "1", "2", "3"];

  @Input({
    alias: 'title'
  })
  task!: string;

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.list.push(value);
  }

  removeItem(value: string) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      if (this.list[i] === value) {
        this.list.splice(i, 1);
      }
    }
  }

}

