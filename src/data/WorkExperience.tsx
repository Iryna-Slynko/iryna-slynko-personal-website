import { IWorkExperience } from "../types/WorkExperience";

export default function WorkExperience(): IWorkExperience[] {
  return [{
    companyName: "JP Morgan Chase",
    website: new URL("https://www.jpmorgan.com/IE/en/about-us"),
    position: "Software Engineer Intern",
    startDate: new Date(2021, 5, 1),
    endDate: new Date(2021, 8, 10),
    technologies: ["Python", "React", "Jira", "Java", "JavaScript", "Git", "Spring MVC"],
    practices: ["Unit Testing", "Agile", "Code Review"],
    responsibilities: "Delivered features for the web app solution. " +
      "Winner of Global Hackathon in Dublin. Top 10 in 2021 EMEA Secure Code Warrior Tournament."
  },
  {
    companyName: "Verizon Media",
    website: new URL("https://ie.yahoo.com/"),
    position: "Software Engineer Associate (Apprentice)",
    startDate: new Date(2021, 2, 1),
    endDate: new Date(2021, 5, 10),
    technologies: ["C#"],
    practices: ["Agile"],
    responsibilities: "Trained in creating event-driven C# applications, OOP, Agile, IT Security and Software Design Principles. "+
    "Shadowing Software Engineers on the Yahoo! ad platform, participating in scrum meetings. Participated in diversity and inclusion events, eco initiatives."
  },
  {
    companyName: "Ardanis",
    website: new URL("https://ardanis.com/"),
    position: "Software Engineer Intern",
    startDate: new Date(2020, 11, 1),
    endDate: new Date(2021, 2, 10),
    technologies: ["JavaScript", "Salesforce", "Git", "CSS", "AWS EC2"],
    practices: ["Agile", "Kanban"],
    responsibilities: "Web development, client meeting participation, version control, Agile, demoing, code review and data migration project"
  },
  {
    companyName: "CSInc",
    website: new URL("http://csinc.ie/Home/Research"),
    position: "Software Development Contributor",
    startDate: new Date(2020, 5, 1),
    endDate: new Date(2020, 7, 10),
    technologies: ["ASP.NET MVC", "C#", "CSS", "SQL", "JavaScript", "Git", "Azure Vision"],
    practices: ["Unit Testing", "Kanban", "Code Review"],
    responsibilities: "Developed software system recognizing handwritten surveys and feedback and storing the processed data in the database. Implemented unit testing."+
    "Made the application configurable using environment variables. Organised team work."
  },
  ];
}
