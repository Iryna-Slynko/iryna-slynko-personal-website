export interface IEducationExperience {
  readonly universityName: string;
  readonly website: URL;
  readonly diploma: string;
  readonly graduationDate: Date;
  readonly modules: IModule[];
}
interface IModule {
  readonly title: string;
  readonly grade: "A" | "A-" | "B+" | "B" | "B-";
}
