import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {

  @Output() postCreated = new EventEmitter<Post>();
  enteredContent = '';
  enteredTitle = '';
  enteredValue = '';
  // randNum = (Math.random() * 10);
  randNum() {
    return (Math.random() * 10);
  }


  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content,
      // myNum: this.randNum()
    };
    this.postCreated.emit(post);
  }
}
