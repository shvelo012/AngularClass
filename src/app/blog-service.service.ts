import { Injectable } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})


export class BlogServiceService {
  private posts: Post[] = [];

  constructor() { }
  


  getPosts() {
    return this.posts;
  };

  addpost(post: Post) {
    this.posts.push(post);
  };

  removePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
  };
}
