export interface ITaskInfo {
  title: string;
  topic: ITypeTopic;
  description: string;
  date: string;
}
export type ITypeTopic = "Research" | "Web Design" | "Copywriting";
