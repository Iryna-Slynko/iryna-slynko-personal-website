import { format } from 'date-fns';
import React from 'react';

import { IEducationExperience } from '../types/EducationExperience';
import { AccordionSection } from './AccordionSection';
import { MyAccordionItem } from "./AccordionItem";

interface IProps {
  readonly education: IEducationExperience[],
}

export default class Education extends React.Component<IProps> {
  render(): React.ReactNode {
    const experience = this.props.education.map(function (education, index) {
      const date = (education.graduationDate > new Date() ? "expected in " : "") + format(education.graduationDate, "MMM yyyy");
      return <MyAccordionItem date={date} subtitle={education.diploma} title={education.universityName}
        index={index} prefix='work' />;
    });

    return <AccordionSection id='education' title='Education'>
      {experience}
    </AccordionSection>;
  }
}