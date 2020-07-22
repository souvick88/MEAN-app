import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

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


  onAddPost() {

    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent,
      // myNum: this.randNum()
    };
    this.postCreated.emit(post);
  }
}
