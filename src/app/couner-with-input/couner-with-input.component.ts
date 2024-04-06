import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-couner-with-input',
  standalone: true,
  imports: [],
  templateUrl: './couner-with-input.component.html',
  styleUrl: './couner-with-input.component.css'
})
export class CounerWithInputComponent {

  @Output() inputValue = new EventEmitter<string>();

  number: number = 0;


  emitInputValue(value: string) {
    this.inputValue.emit(value);
    this.number = parseInt(value);
  }


  increase() {
    this.number++;
  }

  decrease() {
    if (this.number > 0) {
      this.number--;
    }
  }
}
