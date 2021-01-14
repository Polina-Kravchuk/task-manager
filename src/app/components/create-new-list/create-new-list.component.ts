import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-new-list',
  templateUrl: './create-new-list.component.html',
  styleUrls: ['./create-new-list.component.scss']
})
export class CreateNewListComponent implements OnInit {

  isTab: boolean;
  listName: string;

  ListFormControl = new FormControl('', [
    Validators.required ]);

  @Output()
  addList: EventEmitter<string> = new EventEmitter<string>();

  callAddList() {
    this.addList.emit(this.listName);
    this.InvertState();
    this.listName='';
  }

  InvertState(){
    this.isTab=!this.isTab;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
