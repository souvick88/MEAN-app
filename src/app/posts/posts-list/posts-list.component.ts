import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  constructor() {}
  posts = [
    { title: '1st post', content: 'This si the 1st post' },
    { title: '2nd post', content: 'This si the 2 post' },
    { title: '3rd post', content: 'This si the 3 post' },
  ];
  name = 'ssdfds';

  ngOnInit(): void {}
}
