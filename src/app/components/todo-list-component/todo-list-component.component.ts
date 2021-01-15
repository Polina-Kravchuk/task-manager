import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoListModel} from "../../models/todoListModel";
import {TodoItemModel} from "../../models/todoItemModel";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.scss']
})
export class TodoListComponentComponent implements OnInit {

  //todoItemInList: TodoItemModel;
  itemName: string;

  ItemFormControl = new FormControl('', [
    Validators.required ]);

  @Input()
  todoList: TodoListModel;

  @Output()
  delete: EventEmitter<any> = new EventEmitter<any>();

  callDelete() {
    this.delete.emit();
  }

  @Output()
  deleteItemm: EventEmitter<any> = new EventEmitter<any>();

  DeleteItemFunc(item: TodoItemModel){
    this.todoList.items = this.todoList.items.filter(e => e.text !==item.text)
    this.deleteItemm.emit();
  }

  @Output()
  addItemm: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  addItem() {
    if (this.ItemFormControl.invalid) {
      this.ItemFormControl.markAllAsTouched();
      return;
    }
    const todoItem = new TodoItemModel();
    todoItem.text=this.itemName;
    this.todoList.items.push(todoItem)
    this.addItemm.emit();
    this.itemName='';
    this.ItemFormControl.markAsUntouched();
  }

  ngOnInit(): void {
  }

}
