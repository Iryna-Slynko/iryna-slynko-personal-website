import { format } from 'date-fns';
import React from 'react';
import { Technology } from '../types/Technology';
import { IWorkExperience } from '../types/WorkExperience';
import { generateAccordion, generateAccordionItem } from './generateAccordion';


interface IProps {
  readonly jobs: IWorkExperience[],
}

interface IState {
  readonly jobs: IWorkExperience[],
  selectedSkill?: Technology
}


export default class Work extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      jobs: props.jobs
    }
  }

  render(): React.ReactNode {
    const experience = this.state.jobs.map(function (work, index) {
      let date = format(work.startDate, "MMM yyyy") + " - ";
      switch (work.endDate) {
        case 'Present':
          date += "Present";
          break;
        default:
          date += format(work.endDate, "MMM yyyy");
      }
      const title = work.companyName;
      const subtitle = work.position;
      const extraText = work.responsibilities;
      return generateAccordionItem('work', index, title, subtitle, date, extraText);
    })
    return (
      generateAccordion('experience', 'Experience', experience)
    )
  }
}