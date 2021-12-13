import { IEducationExperience } from "./EducationExperience";
import { IProject } from "./Project";
import { IWorkExperience } from "./WorkExperience";

import { ISkillInfo } from "./SkillInfo";

export interface IInfo {
  readonly education: IEducationExperience[],
  readonly jobs: IWorkExperience[],
  readonly projects: IProject[],
  readonly skills: ISkillInfo[]
}