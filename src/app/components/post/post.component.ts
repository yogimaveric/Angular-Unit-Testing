import { Component } from '@angular/core';
import { Post } from '../../models/Posts';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../../service/Post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  posts:Post[] = [];
  constructor(private post:PostService){}

  ngOnInit(){
    this.getPosts();
  }

  getPosts(){
    this.post.getPosts().subscribe((data)=>{
      this.posts = data;
      console.log(this.posts);
    })
  }

  delete(post:Post){
    this.posts = this.posts.filter(p =>p.id !=post.id);
    this.post.deletePosts(post).subscribe();
  }
}
