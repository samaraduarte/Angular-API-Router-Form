import { Component, OnInit } from '@angular/core';
import { User } from './../models/user.model';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // uma propriedade do tipo da interface
  user: User;

  // uma propriedade que será um array do tipo da interface
  ArrayUser: User[] = [];

  // instancie o serviço através de injeção de dependência no construtor da classe do componente
  constructor(private userService: UserService) { }

  // execute a chamada da função get dentro do ngOnInit
  async ngOnInit(){
    await this.userService.Get();
  }
}
