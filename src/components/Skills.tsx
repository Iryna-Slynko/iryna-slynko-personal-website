import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ISkillInfo } from '../types/SkillInfo';


interface IProps {
  readonly skills: ISkillInfo[]
}

export default function Skills(props:IProps) {
  const skills = props.skills.map((skill) => {
    const className = 'bar-expand ' + skill.skill.toLowerCase() + 'level-' + skill.level.toString();
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
          <Col>
            {skills}
          </Col>
        </Row>
      </Container>

    </section>
  )
}