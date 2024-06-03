import { Component } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  constructor(private blogService: BlogServiceService) { }
  posts = this.blogService.getPosts();
}
