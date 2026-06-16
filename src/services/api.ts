// const registerAxios = axios.create({ baseURL: baseUrl + "kanban" });
import axios from "axios";
interface IRegData extends IAuthData {
  name: string;
}
interface IAuthData {
  login: string;
  password: string;
}
export interface ITaskData {
  title: string;
  topic: string;
  status: string;
  description: string;
  date: string;
}
const baseUrl = "https://wedev-api.sky.pro/api/";
const token = `Bearer ${localStorage.getItem("token")}`;

const userAxios = axios.create({
  baseURL: baseUrl + "user",
  headers: { "Content-Type": "text/javascript" },
});
const tasksAxios = axios.create({
  baseURL: baseUrl + "kanban",
  headers: { "Content-Type": "text/javascript", Authorization: token },
});
export async function register(userData: IRegData) {
  const res = await userAxios.post("/", userData);
  return res.data;
}
export async function auth(userData: IAuthData) {
  const res = await userAxios.post("/login", userData);

  return res.data;
}

export async function getTasks() {
  const res = await tasksAxios.get("/");
  return res.data;
}
export async function getTask(id: string): Promise<{ task: ITaskData }> {
  const res = await tasksAxios.get(`/${id}`);
  return res.data;
}
export async function addTasks(task: Partial<ITaskData>): Promise<ITaskData[]> {
  const res = await tasksAxios.post("/", task);
  return res.data.tasks;
}
export async function editTasks(id: string, task: Partial<ITaskData>) {
  const res = await tasksAxios.put(`/${id}`, task);
  return res.data.tasks;
}
export async function deleteTasks(id: string) {
  const res = await tasksAxios.delete(`/${id}`);
  return res.data.tasks;
}
