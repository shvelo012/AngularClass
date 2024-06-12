import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";
import { DirectivePlaygroundComponent } from './directive-playground/directive-playground.component';
import { CounerWithInputComponent } from "./couner-with-input/couner-with-input.component";
import { UserListComponent } from './user-list/user-list.component';
import { Item, TodoListComponent } from './todo-list/todo-list.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CounterComponent, DirectivePlaygroundComponent, CounerWithInputComponent, UserListComponent, TodoListComponent, HeroesComponent, PostComponent, PostListComponent, AddPostComponent, FormComponent]
})
export class AppComponent {
  title = 'myTestApp';

  handleInputValue(value: string) {
    console.log(value);
  }

  users = ["Gio", "Dato", "Kote", "Koba", "Evklite", "George"];

  todolist: Item[] = [
    {
      title: 'Learn something',
      description: "learn angular again",
      user: 'jango'

    },
    {
      title: 'Learn java',
      description: "learn angular again",
      user: 'Luka'

    },
    {
      title: 'Learn python',
      description: "learn angular again",
      user: 'Gio'
    },
  ];

}
