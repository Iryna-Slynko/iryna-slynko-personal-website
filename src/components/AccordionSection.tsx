import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Container from 'react-bootstrap/Container';

export function generateAccordion(id: string, title: string, experience: JSX.Element[]) {
}

interface IProps {
  id: string,
  title: string
}

export class AccordionSection  extends React.Component<IProps> {
  render(){
  return <section id={this.props.id}>
    <Row>
      <Col sm={3} md={2}>
        <h4>
          <span>
            {this.props.title}
          </span>
        </h4>
      </Col>
      <Col>
        <Accordion>
          {this.props.children}
        </Accordion>
      </Col>
    </Row>
  </section>;
  }
}

interface IParams {
  children: string,
  eventKey: string,
  subtitle: string
}
export function ContextAwareToggle(params: IParams) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    params.eventKey,
    () => { },
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


