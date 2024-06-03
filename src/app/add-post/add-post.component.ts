import { Component } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';


@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

  constructor(private blogService: BlogServiceService) { }

  onSubmit(title: string, content: string) {
    this.blogService.addpost({ id: Date.now(), title, content });
  }
}
