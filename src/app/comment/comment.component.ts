import { Component, OnInit } from '@angular/core';
import { Comments } from './../models/comments.model';
import { CommentService } from './../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  // uma propriedade do tipo da interface
  comments: Comments;

  // uma propriedade que será um array do tipo da interface
  ArrayComments: Comments[] = [];

  // instancie o serviço através de injeção de dependência no construtor da classe do componente
  constructor(private commentService: CommentService) { }

  // execute a chamada da função get dentro do ngOnInit
  async ngOnInit() {
    await this.commentService.Get();
  }

}
