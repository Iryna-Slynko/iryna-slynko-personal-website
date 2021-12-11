import { format } from 'date-fns';
import React from 'react';
import Card from 'react-bootstrap/Card';

import WorkExperience from '../data/WorkExperience';

export default function Work() {
  const experience = WorkExperience().map(function(work) {

    return (<Card>
      <Card.Body>
        <Card.Title>
          {work.position} at
        </Card.Title>
        <Card.Subtitle>
          {work.companyName}<span>•</span>
          <em className='date'>
          {format(work.startDate, "MMM yyyy")} - { work.endDate === "Present" ? work.endDate : format(work.endDate, "MMM yyyy") }
          </em>
        </Card.Subtitle>

      </Card.Body>
    </Card>);
  })
  return (
    <section id='work'>
    {experience}
    </section>
  )
}