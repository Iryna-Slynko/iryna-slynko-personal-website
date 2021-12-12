import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Container from 'react-bootstrap/Container';

export function generateAccordion(id: string, title: string, experience: JSX.Element[]) {
  return <section id={id}>
    <Row>
      <Col xs={3} md={2}>
        <h4>
          <span>
            {title}
          </span>
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

interface IParams {
  children:string,
  eventKey: string,
  subtitle: string
}
function ContextAwareToggle(params: IParams) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    params.eventKey,
    () => {},
  );

  const isCurrentEventKey = activeEventKey === params.eventKey;

  return (
    <button
      type="button"
      className="accordion-button collapsed"
      onClick={decoratedOnClick}
    >
      <Container>
      <Row>
        <Col xs={6} className='h5'>
        {params.children}
        </Col>
        <Col xs={6} className='text-end h6'>
          <span className='date'>
        {isCurrentEventKey ? "" : params.subtitle}
        </span>
        </Col>
      </Row>
      </Container>
    </button>
  );
}

export function generateAccordionItem(prefix: string, index: number, title: string, subtitle: string, date: string, extraText: string): JSX.Element {

  return  <Accordion.Item key={title} eventKey={prefix + '-' + index.toString()}>
  <ContextAwareToggle subtitle={date} eventKey={prefix + '-' + index.toString()}>{title}</ContextAwareToggle>
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
</Accordion.Item>
;
}
