import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';

export function generateAccordion(id: string, title: string, experience: JSX.Element[]) {
  return <section id={id}>
    <Row>
      <Col xs={3} md={2}>
        <h4>
          {title}
        </h4>
      </Col>
      <Col>
        <Accordion>
          {experience}
        </Accordion>
      </Col>
    </Row>
  </section>;
}

export function generateAccordionItem(index: number, title: string, subtitle: string, date: string, extraText: string): JSX.Element {
  return <Accordion.Item eventKey={index.toString()}>
    <Accordion.Header>
      {title}
    </Accordion.Header>
    <Accordion.Body>
      <h6>
        <span className='title'>
          {subtitle}</span><span>•</span>
        <span className='date'>
          {date}
        </span>
      </h6>
      <p>
        {extraText}
      </p>
    </Accordion.Body>
  </Accordion.Item>;
}
