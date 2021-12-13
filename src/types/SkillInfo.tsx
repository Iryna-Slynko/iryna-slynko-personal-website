import { Technology } from "./Technology";

export interface ISkillInfo {
  readonly skill: Technology;
  readonly level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}
