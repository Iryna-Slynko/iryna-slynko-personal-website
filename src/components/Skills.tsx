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
  selectedSkill: Technology | null
}

export default class Skills extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { skills: props.skills, selectedSkill: null };
    this.setActiveSkills = this.setActiveSkills.bind(this);
  }

  setActiveSkills(skillName: Technology) {
    if (this.state.selectedSkill === skillName) {
      this.setState({ selectedSkill: null });
    } else {
      this.setState({ selectedSkill: skillName });
    }
  }

  render(): React.ReactNode {
    const skills = this.state.skills.map((skill) => {
      const spanClassName = skill.skill.toLowerCase() + ' level-' + skill.level.toString();
      const liClassName = skill.skill === this.state.selectedSkill ? "selected" : "";
      return (
        <li onClick={()=>{this.setActiveSkills(skill.skill)}} className={liClassName} key={skill.skill}>
          <span className={spanClassName}></span><em>{skill.skill}</em>
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