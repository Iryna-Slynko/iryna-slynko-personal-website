import { useState } from 'react';
import { IInfo } from '../types/Info';
import { Technology } from '../types/Technology';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Work from './Work';

interface IProps {
  readonly info: IInfo,
}

export default function Resume({ info }: IProps) {
  const [selectedSkill, setSelectedSkill] = useState<Technology | null>(null);

  const onSelectingItem = (skill: Technology) => {
    setSelectedSkill((current) => current === skill ? null : skill);
  };

  return (
    <section id='resume'>
      <Skills skills={info.skills} selectedSkill={selectedSkill} onSkillChange={onSelectingItem} />
      <Work jobs={info.jobs} selectedSkill={selectedSkill} />
      <Education education={info.education} />
      <Projects projects={info.projects} />
    </section>
  )
}