import { useLocalStorage } from "usehooks-ts";
import { v4 as uuidv4 } from "uuid";
import { ColumnType } from "../utils/enums";
import { TaskModel } from "../utils/models";

//Stores all the localbrowser tasks using local storage

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>("tasks", {
    Todo: [
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: "Task 1",
        color: "blue.300",
      },
    ],
    "In Progress": [
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: "Task 2",
        color: "yellow.300",
      },
    ],

    Blocked: [
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: "Task 3",
        color: "red.300",
      },
    ],
    Completed: [
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: "Task 4",
        color: "green.300",
      },
    ],
  });
}

export default useTaskCollection;
