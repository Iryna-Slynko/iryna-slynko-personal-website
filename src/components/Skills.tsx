import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ISkillInfo } from '../types/SkillInfo';
import { Technology } from '../types/Technology';


interface IProps {
  readonly skills: ISkillInfo[]
  selectedSkill: Technology | null
  onSkillChange: (skill: Technology) => void
}

export default class Skills extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = { selectedSkill: null };
  }

  render(): React.ReactNode {
    const skills = this.props.skills.map((skill) => {
      const spanClassName = skill.skill.toLowerCase() + ' level-' + skill.level.toString();
      const liClassName = skill.skill === this.props.selectedSkill ? "selected" : "";
      return (
        <li onClick={()=>{this.props.onSkillChange(skill.skill)}} className={liClassName} key={skill.skill + liClassName}>
          <span className={spanClassName}></span><em>{skill.skill}</em>
        </li>
      );
    });

    return (
      <section id='skills'>
        <Container>
          <Row className="justify-content-center">
            <Col className="pb-5" sm={3} md={2}>
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