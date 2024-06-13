import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})


export class BlogServiceService {
  postListchanged = new Subject<void>();
  private posts: Post[] = [];

  constructor() { }
  


  getPosts() {
    return this.posts;
  };

  addpost(post: Post) {
    console.log(post);
    this.posts.push(post);
  };

  removePost(id: number) {
    console.log(id);
    this.posts = this.posts.filter(post => post.id !== id);
  };
}
