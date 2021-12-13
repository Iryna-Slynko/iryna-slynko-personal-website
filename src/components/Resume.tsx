import React from 'react';
import EducationExperience from '../data/EducationExperience';
import ProjectsData from '../data/Projects';
import WorkExperience from '../data/WorkExperience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Work from './Work';

export default function Resume() {
  return (
    <section id='resume'>
      <Skills />
      <Work jobs={WorkExperience()} />
      <Education education={EducationExperience()} />
      <Projects projects={ProjectsData()} />
    </section>
  )
}