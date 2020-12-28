import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoListModel} from "../../models/todoListModel";
import {TodoItemModel} from "../../models/todoItemModel";

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.scss']
})
export class TodoListComponentComponent implements OnInit {

  //todoItemInList: TodoItemModel;
  itemName: string;

  @Input()
  todoList: TodoListModel;

  @Output()
  delete: EventEmitter<any> = new EventEmitter<any>();

  callDelete() {
    this.delete.emit();
  }

  constructor() {
  }

  addItem() {
    const todoItem = new TodoItemModel();
    todoItem.text=this.itemName;
    this.todoList.items.push(todoItem)
    this.itemName='';
  }

  ngOnInit(): void {
  }

}
