import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private JsonExemple = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  async Get(){
    const resposta = await this.http.get(this.JsonExemple).toPromise();
    console.log(resposta);
    return resposta;
  }
  async GetById(id){
    const resposta = await this.http.get(this.JsonExemple + id).toPromise();
    console.log(resposta);
    return resposta;
  }
  async Post(id){
    return id;
  }
}
