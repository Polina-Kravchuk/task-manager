import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-new-list',
  templateUrl: './create-new-list.component.html',
  styleUrls: ['./create-new-list.component.scss']
})
export class CreateNewListComponent implements OnInit {

  isTab: boolean;
  listName: string;

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
