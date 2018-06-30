import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() produtos;
  @Output() update = new EventEmitter<any>();
  @Output() remove = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  edit(produto){
    console.log("produto: ", produto);
    this.update.emit(produto);
  }
  delete(produto){
    console.log("produto: ", produto);
    this.remove.emit({...produto});
  }

}
