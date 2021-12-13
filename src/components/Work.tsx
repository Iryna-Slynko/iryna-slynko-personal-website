import { format } from 'date-fns';
import React from 'react';
import { Technology } from '../types/Technology';
import { IWorkExperience } from '../types/WorkExperience';
import { AccordionSection } from './AccordionSection';
import { MyAccordionItem } from "./AccordionItem";


interface IProps {
  readonly jobs: IWorkExperience[],
}

interface IState {
  selectedSkill?: Technology
}


export default class Work extends React.Component<IProps, IState> {
  render(): React.ReactNode {
    const experience = this.props.jobs.map(function (work, index) {
      let date = format(work.startDate, "MMM yyyy") + " - ";
      switch (work.endDate) {
        case 'Present':
          date += "Present";
          break;
        default:
          date += format(work.endDate, "MMM yyyy");
      }
      return <MyAccordionItem date={date} subtitle={work.position} title={work.companyName} index={index} prefix='work'>
        {work.responsibilities}
      </MyAccordionItem>;
    })
    return <AccordionSection id='experience' title='Experience'>
      {experience}
    </AccordionSection>;
  }
}