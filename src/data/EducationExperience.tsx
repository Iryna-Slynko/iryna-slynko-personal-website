interface IEducationExperience {
  readonly universityName: string,
  readonly website: URL,
  readonly diploma: string,
  readonly graduationDate: Date,
  readonly modules: IModule[]
}

interface IModule {
  title: string,
  grade: "A+" | "A" | "A-" | "B+" | "B" | "B-"
}


export default function EducationExperience(): IEducationExperience[] {
  return [
    {
      universityName: "Technological University Dublin",
      website: new URL("https://www.tudublin.ie/"),
      diploma: "Bachelor of Science with Honours in Computing with IT Management",
      graduationDate: new Date(2022, 9, 30),
      modules: []
    },
    {
    universityName: "National College of Ireland",
    website: new URL("https://www.ncirl.ie/"),
    diploma: "Higher Diploma in Science in Software Development",
    graduationDate: new Date(2022, 3, 30),
    modules: []
  }
];
}