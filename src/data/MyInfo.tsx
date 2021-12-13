import Projects from "./Projects";
import { IInfo } from "../types/Info";
import EducationExperience from "./EducationExperience";
import WorkExperience from "./WorkExperience";

export default function MyInfo(): IInfo {
  return {
    education: EducationExperience(),
    projects: Projects(),
    jobs: WorkExperience(),
    skills: []
  };
}