import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  constructor() { }
  // posts = [
  //   { title: '1st post', content: 'This si the 1st post' },
  //   { title: '2nd post', content: 'This si the 2 post' },
  //   { title: '3rd post', content: 'This si the 3 post' },
  // ];
  // posts = [
  //   { title: 'First Post', content: 'This is the first post\'s content' },
  //   { title: 'Second Post', content: 'This is the second post\'s content' },
  //   { title: 'Third Post', content: 'This is the third post\'s content' }
  // ];

  @Input() posts: Post[] = [];

  ngOnInit(): void { }
}
