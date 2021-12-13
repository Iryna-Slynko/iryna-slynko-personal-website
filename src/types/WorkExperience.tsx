import { Practice } from "./Practice";
import { Technology } from "./Technology";

export interface IWorkExperience {
  readonly companyName: string;
  readonly website: URL;
  readonly position: string;
  readonly startDate: Date;
  readonly endDate: Date | 'Present';
  readonly technologies: Technology[];
  readonly practices: Practice[];
  readonly responsibilities: string;
}
