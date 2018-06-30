import { Component } from '@angular/core';
import { ProdutosService } from './produtos.service';
interface Alert {
  type?: string;
  message?: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produtos;
  alert: Alert;
  id: string;
  produto;
  constructor(private produtosService: ProdutosService) { }
  ngOnInit() {
    this.getProdutos();
  }
  getProdutos() {
    this.produtos = this.produtosService.list();
  }
  update(produto) {
    this.id = produto._id;
    this.produto = produto;
  }
  remove(produto) {
    if (confirm('Remover ' + produto.nome + '?')) {
      this.produtosService.remove(produto._id).subscribe(res => {
        this.alert = res;
        this.getProdutos();
      })
    }
  }
  submit(produto) {
    if (this.id) {
      this.produtosService.update(this.id, produto).subscribe(res => {
        this.alert = res;
        this.alert.type = 'success';
        this.getProdutos();
      });  
    } else {
      this.produtosService.save(produto).subscribe(res => {
        this.alert = res;
        this.alert.type = 'success';
        this.getProdutos();
      })
    }
    this.id = null;
  }
}
