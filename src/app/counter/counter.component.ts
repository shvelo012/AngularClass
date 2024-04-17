import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [MatButtonModule],
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
