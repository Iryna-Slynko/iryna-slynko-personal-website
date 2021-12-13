import { IEducationExperience } from "./EducationExperience";
import { ISkillInfo } from "./SkillInfo";
import { IProject } from "./Project";
import { IWorkExperience } from "./WorkExperience";

export interface IInfo {
  readonly education: IEducationExperience[],
  readonly jobs: IWorkExperience[],
  readonly projects: IProject[],
  readonly skills: ISkillInfo[]
}