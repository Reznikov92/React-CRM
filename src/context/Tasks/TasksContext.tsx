import { createContext } from "react";
import type { ITaskInfo } from "../../types";
import type { ITaskData } from "../../services/api";
interface ITasksProvide {
  tasks: ITaskData[];
  setTasks: React.Dispatch<React.SetStateAction<ITaskData[]>>;
  submitUserData: (
    e: React.FormEvent<HTMLFormElement>,
    setError: (error: string) => void,
    taskInfo: ITaskInfo,
    setLoading: (loading: boolean) => void,
  ) => Promise<void>;
  deleteCard: (
    id: string,
    setLoading: (loading: boolean) => void,
  ) => Promise<void>;
  saveTask: (
    id: string,
    setLoading: (loading: boolean) => void,
    newTask: Partial<ITaskData>,
  ) => Promise<void>;
}
export const TasksContext = createContext<undefined | ITasksProvide>(undefined);
