import { NgFor, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, NgStyle, MatListModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Input() userList!: string[];
}
