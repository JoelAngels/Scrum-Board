import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { ColumnType } from "../utils/enums";
import { pickChakraRandomColor } from "../utils/helpers";
import { TaskModel } from "../utils/models";
import useTaskCollection from "./useTaskCollection";

const MAX_TASK_PER_COLUMN = 100;

function useColumnTasks(column: ColumnType) {
  const [tasks, setTasks] = useTaskCollection();

  //implement the additional of a new task

  const addEmptyTask = useCallback(() => {
    console.log(`Adding new empty task to ${column} column`);

    //take reference to the list of tasks , assigned to the column being used
    setTasks((allTasks) => {
      const columnTasks = allTasks[column];

      //too many tasks, in order to avoid filling up the memory
      if (columnTasks.length > MAX_TASK_PER_COLUMN) {
        console.log("Too many tasks");
        return allTasks;
      }

      const newColumnTask: TaskModel = {
        id: uuidv4(),
        title: `New ${column} task`,
        color: pickChakraRandomColor(".300"),
        column,
      };

      return {
        ...allTasks,
        [column]: [newColumnTask, ...columnTasks],
      };
    });
  }, [column, setTasks]);

  //   ====================================Delete Task =================================

  const deleteTask = useCallback(
    (id: TaskModel["id"]) => {
      console.log(`Removing task ${id}..`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.filter((task) => task.id !== id),
        };
      });
    },
    [column, setTasks]
  );

  //   ====================================Update Task =================================

  const updateTask = useCallback(
    (id: TaskModel["id"], updatedTask: Omit<Partial<TaskModel>, "id">) => {
      console.log(`Updating task ${id} with ${JSON.stringify(updateTask)}`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
          ),
        };
      });
    },
    [column, setTasks]
  );

  //   ====================================Delete Task =================================

  return {
    tasks: tasks[column],
    addEmptyTask,
    updateTask,
    deleteTask,
  };
}

export default useColumnTasks;
