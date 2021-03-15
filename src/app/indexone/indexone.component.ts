import { Component, OnInit } from '@angular/core';
import {PostPayload} from '../add-post/post-payload';
import {AddPostService} from '../add-post.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-indexone',
  templateUrl: './indexone.component.html',
  styleUrls: ['./indexone.component.css']
})
export class IndexoneComponent implements OnInit {

  posts: Observable<Array<PostPayload>>;
  constructor(private postService: AddPostService) { }


  ngOnInit() {
    this.posts = this.postService.getAllPosts();
  }

}
