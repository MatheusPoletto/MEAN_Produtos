import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProdutosService {

  constructor( private http: HttpClient) { }
  list(){
    return this.http.get('http://localhost:3000/produtos/listar');
  }
  save(user) {
    return this.http.post('http://localhost:3000/produtos/cadastrar', user);
  }
  update(id, user) {
    return this.http.put('http://localhost:3000/produtos/alterar/' + id, user);
  }
  remove(id) {
    return this.http.delete('http://localhost:3000/produtos/remover/' + id);
  }
}
