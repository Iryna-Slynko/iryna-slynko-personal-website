import { IEducationExperience } from "../types/EducationExperience";

export default function EducationExperience(): IEducationExperience[] {
  return [
    {
      universityName: "National College of Ireland",
      website: new URL("https://www.ncirl.ie/"),
      diploma: "Level 8. Higher Diploma in Science in Software Development",
      graduationDate: new Date(2022, 3, 30),
      stages: [{
        stageName: "Stage 1: 2018/2019",
        modules:
        [{
        title:"Software Development",
        grade: "A"
      },
         {
        title:"Systems Analysis",
        grade: "B+"
      },
         {
        title:"Statistics",
        grade: "A"
      },
         {
        title:"Database Fundamentals",
        grade: "A"
      },
         {
        title:"Discrete Mathematics 1",
        grade: "A"
      },
         {
        title:"Computer Architecture",
        grade: "B+"
      },
         {
        title:"Business and Information Systems",
        grade: "B"
      },
         {
        title:"Social Media Communications",
        grade: "B"
      }
         
         }
        ],
      },
               {
        stageName: "Stage 2: 2019/2020",
        modules:
        [{
        title:"Financial Management",
        grade: "B+"
      },
         {
        title:"Routing and Switching",
        grade: "A"
      },
         {
        title:"Discrete Mathematics 2",
        grade: "A"
      },
         {
        title:"Advanced Database Technologies",
        grade: "B"
      },
         {
        title:"Client-side Web Development",
        grade: "A"
      },
         
         {
        title:"Networking Fundamentals",
        grade: "B"
      },
         {
        title:"Visual Design and User Experience",
        grade: "B"
      },
         {
        title:"Software Quality Assurance and Testing",
        grade: "B+"
      },
         {
        title:"Operating Systems Fundamentals",
        grade: "B+"
      },
         {
        title:"Database Administration/Data Analysis",
        grade: "B"
      }]}
               {
        stageName: "Stage 3: 2020/2021",
        modules:
        [{
        title:"Work Experience",
        grade: "Pass"
      },
         {
        title:"Software Development Project",
        grade: "B+"
      },
         {
        title:"Information Security",
        grade: "B+"
      },
         {
        title:"Management Science",
        grade: "A"
      },
         {
        title:"IT Services Management",
        grade: "B"
      },
         {
        title:"Cloud Services/Distributed Systems",
        grade: "A"
      },
         
         {
        title:"Operating Systems",
        grade: "B-"
      },
         {
        title:"Object-Oriented Software Development (C#)",
        grade: "A"
      },
         {
        title:"Server-Side Web Development",
        grade: "B"
      },
     {
        title:"IT Scripting and Automation",
        grade: "A"
      },
     {
        title:"Advanced Routing and Switching",
        grade: "B+"
      }
                 
           ]
    },
       {
        stageName: "Stage 2: 2019/2020",
        modules:
        [{
        title:"Financial Management",
        grade: "B+"
      },
         {
        title:"Routing and Switching",
        grade: "A"
      },
         {
        title:"Discrete Mathematics 2",
        grade: "A"
      },
         {
        title:"Advanced Database Technologies",
        grade: "B"
      },
         {
        title:"Client-side Web Development",
        grade: "A"
      },
         {
        title:"Computer Architecture",
        grade: "B+"
      },
         {
        title:"Networking Fundamentals",
        grade: "B"
      },
         {
        title:"Visual Design and User Experience",
        grade: "B"
      },
         {
        title:"Software Quality Assurance and Testing",
        grade: "B+"
      },
         {
        title:"Operating Systems Fundamentals",
        grade: "B+"
      },
         {
        title:"Database Administration/Data Analysis",
        grade: "B"
      }]}
               {
        stageName: "Stage 4: 2021/2022",
        modules:
        [{
        title:"Private Cloud Architecture",
              },
         {
        title:"DevOps Project",
              },
         {
        title:"Applied Machine Learning",
        
      },
         {
        title:"DevOps/Continuous Integration/Continuous Delivery",
        
      },
         {
        title:"Information Management",
        
      },
         {
        title:"Operations Research",
        
      },
         {
        title:"Interactive Media Design",
        
      },
         {
        title:"Enterprise Performance Architecture",
        
      },
         {
        title:"IT Govenance and Quality",
        
      },
         {
        title:"Security for Cloud/IoT",
        
      },
         {
        title:"Advanced Cloud Provisioning",
        
      },
    
                 
           ]
    }, {
      universityName: "Technological University Dublin",
      website: new URL("https://www.tudublin.ie/"),
      diploma: "Bachelor of Science with Honours in Computing with IT Management",
      graduationDate: new Date(2022, 9, 30),
      stages: [{
        stageName: "Term 1",
        modules:
        [{
        title:"Software Development (Java)",
        grade: "A"
        },
        {
        title:"Object-Oriented Software Engineering",
        grade: "A"
        },
         {
        title:"Web Development",
        grade: "A"
        },
         {
        title:"Database Technologies",
        grade: "A"
        },
        ]
      },
        {
        stageName: "Term 2",
        modules:
        [{
        title:"Algorithms and Advanced Programming",
        grade: "A"
      },
         {
        title:"Data Structures",
        grade: "A"
      },
         {
        title:"Computer Architecture and Networking",
        grade: "B+"
      },
         {
        title:"Distributed Systems",
        grade: "B"
      },
         
        {
        stageName: "Term 3",
        modules:
        [{
        title:"Software Development Project",
        grade: "Ongoing"
      }],
    }]
    }
  ];
}
