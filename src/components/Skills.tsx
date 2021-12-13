import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ISkillInfo } from '../types/SkillInfo';
import { Technology } from '../types/Technology';


interface IProps {
  readonly skills: ISkillInfo[]
}

interface IState {
  readonly skills: ISkillInfo[],
  selectedSkill?: Technology
}

export default class Skills extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { skills: props.skills };
  }

  render(): React.ReactNode {
    const skills = this.state.skills.map((skill) => {
      const className = skill.skill.toLowerCase() + ' level-' + skill.level.toString();
      return (
        <li key={skill.skill}>
          <span className={className}></span><em>{skill.skill}</em>
        </li>
      );
    });

    return (
      <section id='skills'>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={3} md={2}>
              <h4>
                <span>
                  Skills
                </span>
              </h4>
            </Col>
            <Col className='bars'>
              {skills}
            </Col>
          </Row>
        </Container>

      </section>
    )
  }
}