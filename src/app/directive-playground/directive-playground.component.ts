import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-directive-playground',
  standalone: true,
  imports: [NgStyle, HighlightDirective],
  templateUrl: './directive-playground.component.html',
  styleUrl: './directive-playground.component.css'
})
export class DirectivePlaygroundComponent {

}
