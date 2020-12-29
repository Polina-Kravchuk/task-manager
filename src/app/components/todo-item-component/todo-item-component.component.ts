import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItemModel} from "../../models/todoItemModel";

@Component({
  selector: 'app-todo-item-component',
  templateUrl: './todo-item-component.component.html',
  styleUrls: ['./todo-item-component.component.scss']
})
export class TodoItemComponentComponent implements OnInit {

  @Input()
  todoItem: TodoItemModel;

  @Output()
  deleteItem: EventEmitter<any> = new EventEmitter<any>();

  deleteItemFunc(){
    this.deleteItem.emit()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
