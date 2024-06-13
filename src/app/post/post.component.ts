import { Component, Input } from '@angular/core';
import { BlogServiceService, Post } from '../blog-service.service';
import { Router } from '@angular/router'; // Import the Router module

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  constructor(
    private blogService: BlogServiceService,
    private router: Router,
  ) { }
  @Input() post: Post | undefined;
  singlePost: Post | undefined;


  onRemovePost(id: number) {
    this.blogService.removePost(id);
  };

  onPostClick(id: number) {
    this.singlePost = this.blogService.getPosts().filter(post => post.id === id)[0];
    this.router.navigate(['/post', id], { state: this.post });
  }

}
