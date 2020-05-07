import { Component, OnInit } from '@angular/core';
import { Posts } from './../models/posts.model';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // uma propriedade do tipo da interface
  posts: Posts;

  // uma propriedade que será um array do tipo da interface
  ArrayPosts: Posts[] = [];

  // instancie o serviço através de injeção de dependência no construtor da classe do componente
  constructor(private postService: PostService) { }

  // execute a chamada da função get dentro do ngOnInit
  async ngOnInit() {
    await this.postService.Get();
  }
}
