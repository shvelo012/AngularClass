import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";
import { DirectivePlaygroundComponent } from './directive-playground/directive-playground.component';
import { CounerWithInputComponent } from "./couner-with-input/couner-with-input.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CounterComponent, DirectivePlaygroundComponent, CounerWithInputComponent]
})
export class AppComponent {
  title = 'myTestApp';

  handleInputValue(value: string){
    console.log(value);
  }
}
