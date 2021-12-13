import { Technology } from "./Technology";

export interface IProject {
  technologies: Technology[];
  title: string;
  description: string;
  image: string;
  url: string;
}
