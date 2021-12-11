import { Technology } from "../types/Technology";
import { Practice } from "../types/Practice";

interface IWorkExperience { 
  readonly companyName:string,
  readonly website:URL, 
  readonly position:string, 
  readonly startDate: Date,
  readonly endDate: Date | 'Present',
  readonly technologies: Technology[],
  readonly practices: Practice[],
  readonly responsibilities: string
}
export default function WorkExperience():IWorkExperience[] {
  return [{
    companyName: "JP Morgan Chase",
    website: new URL("https://www.jpmorgan.com/IE/en/about-us"),
    position: "Software Engineer Intern",
    startDate: new Date(2021, 6, 1),
    endDate: new Date(2021, 9, 10),
    technologies: ["Python", "React", "Jira", "Java", "JavaScript", "Git", "Spring MVC"],
    practices: ["Unit Testing", "Agile", "Code Review"],
    responsibilities: "Delivered features for the web app solution"
  }];
}