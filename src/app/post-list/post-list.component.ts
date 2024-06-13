import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit{
  constructor(private blogService: BlogServiceService) { }
  posts = this.blogService.getPosts();

  ngOnInit() {
    this.blogService.postListchanged.subscribe(() => {
      this.posts = this.blogService.getPosts();
    });
  }
}