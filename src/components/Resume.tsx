import React from 'react';
import Education from './Education';
import Work from './Work';

export default function Resume() {
  return (
    <section id='resume'>
      <Work />
      <Education />
    </section>
  )
}