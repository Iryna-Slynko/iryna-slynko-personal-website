import Projects from "./Projects";
import { IInfo } from "../types/Info";
import EducationExperience from "./EducationExperience";
import WorkExperience from "./WorkExperience";

export default function MyInfo(): IInfo {
  return {
    education: EducationExperience(),
    projects: Projects(),
    jobs: WorkExperience(),
    skills: [
      {
        "skill": "Python",
        "level": 8
      },
      {
        "skill": "JavaScript",
        "level": 7
      },
      {
        "skill": "Java",
        "level": 6
      },
      {
        "skill": "React",
        "level": 2
      },
      {
        "skill": "CSS",
        "level": 8
      },
      {
        "skill": "C#",
        "level": 5
      }
    ]
  };
}