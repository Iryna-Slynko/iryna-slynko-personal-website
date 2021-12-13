import { format } from 'date-fns';
import React from 'react';

import { IEducationExperience } from '../types/EducationExperience';
import { generateAccordion, generateAccordionItem } from './generateAccordion';

interface IProps {
  readonly education: IEducationExperience[],
}

interface IState {
  readonly education: IEducationExperience[]
}


export default class Education extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      education: props.education
    }
  }

  render(): React.ReactNode {
    const experience = this.state.education.map(function (education, index) {
      const date = (education.graduationDate > new Date() ? "expected in " : "") + format(education.graduationDate, "MMM yyyy");
      const title = education.universityName;
      const subtitle = education.diploma;
      const extraText = "";
      return generateAccordionItem('education', index, title, subtitle, date, extraText);
    })
    return (
      generateAccordion('education', 'Education', experience)
    )
  }
}