import { format } from 'date-fns';
import React from 'react';

import { IEducationExperience } from '../types/EducationExperience';
import { AccordionSection } from './AccordionSection';
import { MyAccordionItem } from "./AccordionItem";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

interface IProps {
  readonly education: IEducationExperience[],
}

export default class Education extends React.Component<IProps> {
  render(): React.ReactNode {
    const experience = this.props.education.map(function (education, index) {
      const stageTabs = education.stages.map(function(stage) {
        const modules = stage.modules.map(function(m) {
          return <li>
            {m.title} {m.grade !== undefined ? " - " + m.grade : "" }
          </li>;
        });
        return <Tab eventKey={stage.stageName} title={stage.stageName}>
          {modules}
        </Tab>
      });
      const date = (education.graduationDate > new Date() ? "expected in " : "") + format(education.graduationDate, "MMM yyyy");
      return <MyAccordionItem date={date} subtitle={education.diploma} title={education.universityName}
        index={index} prefix='work'>
          <Tabs>
          {stageTabs}
          </Tabs>
        </MyAccordionItem>;
    });

    return <AccordionSection id='education' title='Education'>
      {experience}
    </AccordionSection>;
  }
}