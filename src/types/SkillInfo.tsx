import { Technology } from "./Technology";

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>;
type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;
export interface ISkillInfo {
  readonly skill: Technology;
  readonly level: Range<20, 100>;
}
