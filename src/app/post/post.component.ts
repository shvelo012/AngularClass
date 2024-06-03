import { Component, Input } from '@angular/core';
import { BlogServiceService, Post } from '../blog-service.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  constructor(private blogService: BlogServiceService) { }
  @Input() post: Post | undefined;

  onRemovePost(id: number) {
    this.blogService.removePost(id);
  };
}
