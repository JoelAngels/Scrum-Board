import { ColumnType } from "./enums";

//The task model will have 4 attributes =  id, title of the task, column where the task belongs with, color of the card

export interface TaskModel {
  id: string;
  title: string;
  column: ColumnType;
  color: string;
}
