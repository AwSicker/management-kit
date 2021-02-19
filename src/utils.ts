import { commentType, taskItemsType } from "./components/Tasks/taskItems";
import { toggleTaskCompleteById } from "./reducers/tasks";
import { getTasks } from "./context/storage";
import { updateTasks } from "./context/actions";

export const getNewId = (comments: commentType[]) => {
  const sortedArray = comments
    .map((comment) => comment.id)
    .sort((a, b) => a - b);
  const lastId = sortedArray[sortedArray.length - 1];
  if (lastId) {
    return lastId + 1;
  }
  return Math.floor(Math.random() * (500 - 100) + 100);
};

export const getTaskNewId = (tasks: taskItemsType[]) => {
  if (tasks.length === 0) {
    return Math.floor(Math.random() * (500 - 100) + 100);
  }
  const sortedArray = tasks.map((task) => task.id).sort((a, b) => a - b);
  const lastId = sortedArray[sortedArray.length - 1];
  return Number(lastId) + 1;
};

export const countDownFunc = (timeLeft: any) => {
  const countDownDate = new Date("Feb 27, 2021 10:37").getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance > 0) {
    return timeLeft(
      days + "d " + hours + "h " + minutes + "m " + seconds + "s "
    );
  }
  timeLeft("Expired");
};

export const open = (setOpen: (value: boolean) => void) => {
  return setOpen(true);
};

export const close = (setClose: (value: boolean) => void) => {
  return setClose(false);
};

export const doneTaskHandler = async (
  taskId: number,
  isChecked: boolean,
  dispatch: any
) => {
  await toggleTaskCompleteById(taskId, isChecked);
  const tasks = await getTasks();
  const preparedTasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, isOpened: true };
    }
    return task;
  });
  dispatch(updateTasks(preparedTasks));
};
