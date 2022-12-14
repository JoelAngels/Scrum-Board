import { DeleteIcon } from "@chakra-ui/icons";
import { Box, IconButton, Textarea } from "@chakra-ui/react";
import { useTaskDragAndDrop } from "../hooks/useTaskDragAndDrop";
import { TaskModel } from "../utils/models";
import { AutoResizeTextarea } from "./AutoResizeTextArea";

type Taskprops = {
  index: number;
  task: TaskModel;
  onUpdate: (id: TaskModel["id"], updatedTask: TaskModel) => void;
  onDelete: (id: TaskModel["id"]) => void;
  onDropHover: (i: number, j: number) => void;
};

function Task({
  index,
  task,
  onDelete: handleDelete,
  onUpdate: handleUpdate,
  onDropHover: handleDropHover,
}: Taskprops) {
  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>({
    task,
    index,
    handleDropHover,
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    handleUpdate(task.id, { ...task, title: newTitle });
  };

  const handleDeleteClick = () => {
    handleDelete(task.id);
  };
  return (
    <Box
      ref={ref}
      as="div"
      role="group"
      position="relative"
      rounded="lg"
      w={200}
      pl={3}
      pr={7}
      pt={3}
      pb={1}
      boxShadow="xl"
      cursor="grab"
      bgColor={task.color}
      opacity={isDragging ? 0.5 : 1}
    >
      <IconButton
        position="absolute"
        top={0}
        right={0}
        zIndex={100}
        aria-label="delete-task"
        size="md"
        colorScheme="solid"
        color={"gray.700"}
        opacity={0}
        icon={<DeleteIcon />}
        _groupHover={{
          opacity: 1,
        }}
        onClick={handleDeleteClick}
      />

      <AutoResizeTextarea
        value={task.title}
        fontWeight="semibold"
        cursor="inherit"
        border="none"
        p={0}
        resize="none"
        minH={70}
        maxH={200}
        focusBorderColor="none"
        color="gray.700"
        onChange={handleTitleChange}
      />
    </Box>
  );
}

export default Task;
