import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  number: number = 0;

  increase() {
    this.number++;
  }

  decrease() {
    if (this.number > 0) {
      this.number--;
    }
  }
}
