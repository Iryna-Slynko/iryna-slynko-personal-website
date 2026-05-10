import React from 'react';
import { IInfo } from '../types/Info';
import { Technology } from '../types/Technology';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Work from './Work';

interface IProps {
  readonly info: IInfo,
}

interface IState {
  selectedSkill: Technology | null;
}

export default class Resume extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {selectedSkill: null};
    this.onSelectingItem = this.onSelectingItem.bind(this);
  }

  onSelectingItem(skill: Technology) {
    if (skill === this.state.selectedSkill) {
      this.setState({selectedSkill: null});
    } else {
      this.setState({selectedSkill: skill});
    }
  }

  render(): React.ReactNode {
    return (
      <section id='resume'>
        <Skills skills={this.props.info.skills} selectedSkill={this.state.selectedSkill} onSkillChange={this.onSelectingItem} />
        <Work jobs={this.props.info.jobs} selectedSkill={this.state.selectedSkill} />
        <Education education={this.props.info.education} />
        <Projects projects={this.props.info.projects} selectedSkill={this.state.selectedSkill} />
      </section>
    )
  }
}