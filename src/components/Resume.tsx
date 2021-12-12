import React from 'react';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Work from './Work';

export default function Resume() {
  return (
    <section id='resume'>
      <Skills />
      <Work />
      <Education />
      <Projects />
    </section>
  )
}