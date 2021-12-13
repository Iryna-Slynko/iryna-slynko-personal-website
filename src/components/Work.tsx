import { format } from 'date-fns';
import React from 'react';
import { Technology } from '../types/Technology';
import { IWorkExperience } from '../types/WorkExperience';
import { AccordionSection } from './AccordionSection';
import { MyAccordionItem } from "./AccordionItem";


interface IProps {
  readonly jobs: IWorkExperience[],
  selectedSkill: Technology | null
}


export default class Work extends React.Component<IProps> {
  render(): React.ReactNode {
    const selectedSkill = this.props.selectedSkill;
    const experience = this.props.jobs.map(function (work, index) {
      let date = format(work.startDate, "MMM yyyy") + " - ";
      switch (work.endDate) {
        case 'Present':
          date += "Present";
          break;
        default:
          date += format(work.endDate, "MMM yyyy");
      }
      const selected = selectedSkill != null && work.technologies.includes(selectedSkill);
      return <MyAccordionItem key={work.companyName + selected ? "selected" : ""} selected={selected} date={date} subtitle={work.position} title={work.companyName} index={index} prefix='work'>
        {work.responsibilities}
      </MyAccordionItem>;
    })
    return <AccordionSection id='experience' title='Experience'>
      {experience}
    </AccordionSection>;
  }
}