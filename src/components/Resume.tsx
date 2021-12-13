import React from 'react';
import { IInfo } from '../types/Info';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Work from './Work';

interface IProps {
  readonly info: IInfo,
}


export default class Resume extends React.Component<IProps, IInfo> {
  constructor(props: IProps) {
    super(props);
    this.state = props.info;
  }

  render(): React.ReactNode {
    return (
      <section id='resume'>
        <Skills skills={this.state.skills} />
        <Work jobs={this.state.jobs} />
        <Education education={this.state.education} />
        <Projects projects={this.state.projects} />
      </section>
    )
  }
}