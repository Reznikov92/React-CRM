import { useState } from "react";
import { TasksContext } from "./TasksContext";
import type { ITaskInfo } from "../../types";
import { useNavigate } from "react-router-dom";
import {
  addTasks,
  deleteTasks,
  editTasks,
  type ITaskData,
} from "../../services/api";
import { Store } from "react-notifications-component";
import { CustomNotification } from "../../components/CustomNotification";

interface ITasksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider = (props: ITasksProviderProps) => {
  const { children } = props;
  const [tasks, setTasks] = useState<ITaskData[]>([]);
  const navigate = useNavigate();

  async function submitUserData(
    e: React.FormEvent<HTMLFormElement>,
    setError: (error: string) => void,
    taskInfo: ITaskInfo,
    setLoading: (loading: boolean) => void,
  ) {
    e.preventDefault();
    setError("");
    try {
      if (!taskInfo.title || !taskInfo.description) {
        throw new Error("Заполните все поля");
      }
      navigate("/");
      setLoading(true);
      const addTask = await addTasks(taskInfo);
      setTasks(addTask);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }
  async function deleteCard(
    id: string,
    setLoading: (loading: boolean) => void,
  ) {
    setLoading(true);
    const newTasks = await deleteTasks(id);
    setTasks(newTasks);
    setLoading(false);
    navigate("/");
  }
  async function saveTask(
    id: string,
    setLoading: (loading: boolean) => void,
    newTask: Partial<ITaskData>,
  ) {
    try {
      setLoading(true);
      const newTasks = await editTasks(id, newTask);
      setTasks(newTasks);
      navigate("/");

      Store.addNotification({
        content:()=> (<CustomNotification message="Нажмите чтобы перейти к задаче" onClick={()=>navigate(`popbrowse/${id}`)} onDismiss={()=>Store.removeNotification(id)} title="Задача обновлена"/>),
        id,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  const value = { tasks, setTasks, submitUserData, deleteCard, saveTask };
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
