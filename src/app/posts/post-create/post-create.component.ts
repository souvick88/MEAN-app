import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  constructor(public postsService: PostsService) { }

  // @Output() postCreated = new EventEmitter<Post>();
  // postCreated = new EventEmitter<Post>();

  enteredContent = '';
  enteredTitle = '';
  // enteredVgitalue = '';
  // randNum = (Math.random() * 10);
  randNum() {
    return (Math.random() * 10);
  }


  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
