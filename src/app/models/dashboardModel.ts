import {TodoListModel} from "./todoListModel";

export class DashboardModel {
  id: number;
  userId: number;
  title: string;
  lists: TodoListModel[];
}
