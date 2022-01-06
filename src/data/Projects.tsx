import { IProject } from "../types/Project";

export default function ProjectsData(): IProject[] {
  return [
    {
      title: "gRPC Project",
      description: "Business processes optimisation in a gym network for trainers and clients",
      technologies: ["gRPC", "Java"],
      image: "project1.png",
      url: "https://github.com/Iryna-Slynko/grpc_sport"
    },
    {
      title: "Feedback System",
      description: "Contactless feedback collection, recognition and analysis",
      technologies: ['Python', 'OpenCV', 'Flask', 'SQL', 'JavaScript', 'D3'],
      image: "project2.jpeg",
      url: "https://github.com/Iryna-Slynko/feedback-recognition"
    },
    {
      title: "Georgina's Kitchen",
      description: "Website development team project for a bakery based in Galway",
      technologies: ["HTML", "CSS", "Bootstrap", "jQuery", "Git", "JavaScript", "Heroku"],
      image: "project3.png",
      url: "https://georgina.herokuapp.com/"
    },
    {
      title: "WordCloud Project",
      description: "Building word clouds/fun shapes out of the most frequently used words in the text",
      technologies: ["Python", "Pandas"],
      image: "project4.png",
      url: "https://www.linkedin.com/pulse/word-cloud-lesia-ukrainka-cat-iryna-slynko/?trackingId=VSF0JOG1TUWimATZgv1ZnQ%3D%3D"
    },
    {
      title: "CNCF survey 2020 data analysis",
      description: "Investigated usage of CI/CD tools among Kubernetes users. Checked the main problems in organisations",
      technologies: ["Tableau"],
      image: "CNCF_visualisation.png",
      url: "https://github.com/Iryna-Slynko/cncf-survey-visualisation"
    },
    {
      title: "Split the Bill",
      description: "Application to split the expenses from a single receipt. Upload the image, get unique link, share it and claim items",
      technologies: ["Java", "Spring MVC", "JavaScript", "Bootstrap", "GitHub Actions", "Google Cloud Firestore", "Google Cloud Vision"],
      image: "split-the-bill.png",
      url: "https://github.com/Iryna-Slynko/split-the-bill"
    }
  ];
}
